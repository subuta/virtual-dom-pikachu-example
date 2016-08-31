import _ from 'lodash';
import {combineReducers} from 'redux';
import {
  PIKACHU_DOWN_A
} from 'webapp/constants/dots.js';

const timerId = (state = null, action) => {
  switch (action.type) {
    case 'animate':
      return action.payload.timerId;
    case 'cancelAnimate':
      return null;
    default:
      return state;
  }
};

const fps = (state = 10, action) => {
  switch (action.type) {
    case 'animate':
      return action.payload.fps;
    case 'cancelAnimate':
      return 10;
    default:
      return state;
  }
};

const dots = (state = PIKACHU_DOWN_A, action) => {
  switch (action.type) {
    case 'toggle':
      return action.payload;
    default:
      return state;
  }
};

const direction = (state = 'down', action) => {
  switch (action.type) {
    case 'turn':
      return action.payload;
    default:
      return state;
  }
};

const commands = (state = [], action) => {
  switch (action.type) {
    case 'turn':
      // take latest 3 commands
      return _.takeRight([...state, action.payload], 3);
    case 'clearCommands':
      return [];
    default:
      return state;
  }
};

const pikachu = combineReducers({
  fps,
  timerId,
  dots,
  direction,
  commands
});

export default pikachu;

// selectors
export const getFps = (state) => {
  return state.pikachu.fps;
};

export const getTimerId = (state) => {
  return state.pikachu.timerId;
};

export const getDots = (state) => {
  return state.pikachu.dots;
};

export const getDirection = (state) => {
  return state.pikachu.direction;
};

export const getCommands = (state) => {
  return state.pikachu.commands;
};
