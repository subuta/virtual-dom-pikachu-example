import {combineReducers} from 'redux';
import {
  BLANK
} from 'webapp/constants/dots.js';

const dots = (state = BLANK, action) => {
  switch (action.type) {
    case 'toggle':
      return action.payload;
    default:
      return state;
  }
};

const pikachu = combineReducers({
  dots
});

export default pikachu;

// selectors
export const getDots = (state) => {
  return state.pikachu.dots;
};
