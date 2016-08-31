import h from 'snabbdom/h';
import _ from 'lodash';

import {inject} from 'webapp/store.js'
import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'

import * as pikachuActions from 'webapp/actions/pikachu.js';
import {
  getFps,
  getDots,
  getCommands
} from 'webapp/reducers/pikachu.js';

import {registerStyles} from 'webapp/utils/generateStyle.js';
import style from './style.js';

const mapStateToProps = createSelector(
  getFps,
  getDots,
  getCommands,
  (fps, dots, commands) => {
    return {
      fps,
      dots,
      commands
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

const parseCommands = ({commands, fps, animate, clearCommands}) => {
  if (_.isEqual(commands, ['up', 'up', 'up'])) {
    clearCommands();
    if (fps === 1) {
      animate(10)
    } else if (fps === 10) {
      animate(30)
    } else if (fps === 30) {
      animate(60)
    }
  } else if (_.isEqual(commands, ['down', 'down', 'down'])) {
    clearCommands();
    if (fps === 60) {
      animate(30)
    } else if (fps === 30) {
      animate(10)
    } else if (fps === 10) {
      animate(1)
    }
  }
};

const getButtonUpClass = ({commands, fps}) => {
  if (fps === 60) {
    return classes.CONTROLLER_BUTTON_UP4 // faster
  } else if (_.isEqual(_.takeRight(commands, 3), ['up', 'up', 'up'])) {
    return classes.CONTROLLER_BUTTON_UP3
  } else if (_.isEqual(_.takeRight(commands, 2), ['up', 'up'])) {
    return classes.CONTROLLER_BUTTON_UP2
  } else if (_.isEqual(_.takeRight(commands, 1), ['up'])) {
    return classes.CONTROLLER_BUTTON_UP1
  } else {
    return classes.CONTROLLER_BUTTON_UP
  }
};

const getButtonDownClass = ({commands, fps}) => {
  if (fps === 1) {
    return classes.CONTROLLER_BUTTON_DOWN4 // slower
  } else if (_.isEqual(_.takeRight(commands, 3), ['down', 'down', 'down'])) {
    return classes.CONTROLLER_BUTTON_DOWN3
  } else if (_.isEqual(_.takeRight(commands, 2), ['down', 'down'])) {
    return classes.CONTROLLER_BUTTON_DOWN2
  } else if (_.isEqual(_.takeRight(commands, 1), ['down'])) {
    return classes.CONTROLLER_BUTTON_DOWN1
  } else {
    return classes.CONTROLLER_BUTTON_DOWN
  }
};

export default inject(({props}) => {
    // parse applied commands.
    parseCommands(props);
    return h('div',
      {class: {[classes.CONTROLLER]: true}},
      [
        renderButton({child: '↑', onClick: () => props.turn('up'), className: getButtonUpClass(props)}),
        renderButton({child: '↓', onClick: () => props.turn('down'), className: getButtonDownClass(props)}),
        renderButton({child: '◯', className: classes.CONTROLLER_BUTTON_CENTER}),
        renderButton({child: '←', onClick: () => props.turn('left'), className: classes.CONTROLLER_BUTTON_LEFT}),
        renderButton({child: '→', onClick: () => props.turn('right'), className: classes.CONTROLLER_BUTTON_RIGHT})
      ]
    );
  },
  mapStateToProps,
  mapDispatchToProps
);
