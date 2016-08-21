import h from 'snabbdom/h';
import _ from 'lodash';

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
  return h(`button.${classes.CONTROLLER_BUTTON}.${className}`, {
    on: {
      'click': onClick
    }
  }, [child]);
};

export default inject(({props}) => {
    return h(`div.${classes.CONTROLLER}`, {
      // on: {
      //   'click': function (ev) {
      //     return props.alternate();
      //   }
      // },
      // hook: {
      //   create: () => {
      //     console.log('create!');
      //     setInterval(() => {
      //       requestAnimationFrame(() => {
      //         props.alternate();
      //       });
      //     }, 1000 / 2);
      //   }
      // }
    }, [
      renderButton({child: '↑', onClick: () => props.turn('up'), className: classes.CONTROLLER_BUTTON_UP}),
      renderButton({child: '↓', onClick: () => props.turn('down'), className: classes.CONTROLLER_BUTTON_DOWN}),
      renderButton({child: '◯', className: classes.CONTROLLER_BUTTON_CENTER}),
      renderButton({child: '←', onClick: () => props.turn('left'), className: classes.CONTROLLER_BUTTON_LEFT}),
      renderButton({child: '→', onClick: () => props.turn('right'), className: classes.CONTROLLER_BUTTON_RIGHT})
    ]);
  },
  mapStateToProps,
  mapDispatchToProps
);
