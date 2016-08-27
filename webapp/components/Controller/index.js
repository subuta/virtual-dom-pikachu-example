import h from 'snabbdom/h';

import {inject} from 'webapp/store.js'
import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'

import * as pikachuActions from 'webapp/actions/pikachu.js';
import {getDots} from 'webapp/reducers/pikachu.js';

import {registerStyles} from 'webapp/utils/generateStyle.js';
import style from './style.js';

const mapStateToProps = createSelector(
  getDots,
  (dots) => {
    return {
      dots
    }
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(pikachuActions, dispatch)
  }
};

const classes = registerStyles(style);

// render Pikachu from dots.
const renderButton = ({onClick, className, child}) => {
  return h(`button`,
    {
      class: {
        [classes.CONTROLLER_BUTTON]: true,
        [className]: className
      },
      on: {'click': onClick}
    },
    [child]
  );
};

// in JSX
// <button className={`${classes.CONTROLLER_BUTTON}.${className}`}
//         onClick={onClick}>
//   {child}
// </button>

export default inject(({props}) => {
    return h('div',
      {class: {[classes.CONTROLLER]: true}},
      [
        renderButton({child: '↑', onClick: () => props.turn('up'), className: classes.CONTROLLER_BUTTON_UP}),
        renderButton({child: '↓', onClick: () => props.turn('down'), className: classes.CONTROLLER_BUTTON_DOWN}),
        renderButton({child: '◯', className: classes.CONTROLLER_BUTTON_CENTER}),
        renderButton({child: '←', onClick: () => props.turn('left'), className: classes.CONTROLLER_BUTTON_LEFT}),
        renderButton({child: '→', onClick: () => props.turn('right'), className: classes.CONTROLLER_BUTTON_RIGHT})
      ]
    );
  },
  mapStateToProps,
  mapDispatchToProps
);
