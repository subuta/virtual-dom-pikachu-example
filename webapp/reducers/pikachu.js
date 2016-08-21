import {combineReducers} from 'redux';
import {
  PIKACHU_DOWN_A
} from 'webapp/constants/dots.js';

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

const pikachu = combineReducers({
  dots,
  direction
});

export default pikachu;

// selectors
export const getDots = (state) => {
  return state.pikachu.dots;
};

export const getDirection = (state) => {
  return state.pikachu.direction;
};
