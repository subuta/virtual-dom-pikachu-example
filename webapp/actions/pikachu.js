import {
  PIKACHU_DOWN_A,
  PIKACHU_DOWN_B
} from 'webapp/constants/dots.js';

import {
  getDots
} from 'webapp/reducers/pikachu.js';

import _ from 'lodash';

export const downA = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_DOWN_A
  }
};

export const downB = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_DOWN_B
  }
};

export const alternate = () => {
  return (dispatch, getState) => {
    const dots = getDots(getState());
    if (_.isEqual(dots, PIKACHU_DOWN_A)) {
      dispatch(downB())
    } else {
      dispatch(downA())
    }
  };
};
