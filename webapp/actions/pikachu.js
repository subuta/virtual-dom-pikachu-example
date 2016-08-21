import {
  PIKACHU_DOWN_A,
  PIKACHU_DOWN_B,
  PIKACHU_UP_A,
  PIKACHU_UP_B,
  PIKACHU_RIGHT_A,
  PIKACHU_RIGHT_B,
  PIKACHU_LEFT_A,
  PIKACHU_LEFT_B,
} from 'webapp/constants/dots.js';

import {
  getDots,
  getDirection
} from 'webapp/reducers/pikachu.js';

import _ from 'lodash';

export const turn = (direction) => {
  return (dispatch) => {
    dispatch({
      type: 'turn',
      payload: direction
    });

    if (direction === 'up') {
      dispatch(upA())
    } else if (direction === 'down') {
      dispatch(downA())
    } else if (direction === 'right') {
      dispatch(rightA())
    } else if (direction === 'left') {
      dispatch(leftA())
    }
  };
};

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

export const upA = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_UP_A
  }
};

export const upB = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_UP_B
  }
};

export const rightA = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_RIGHT_A
  }
};

export const rightB = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_RIGHT_B
  }
};

export const leftA = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_LEFT_A
  }
};

export const leftB = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_LEFT_B
  }
};

export const alternate = () => {
  return (dispatch, getState) => {
    const dots = getDots(getState());
    const direction = getDirection(getState());
    if (direction === 'down' && _.isEqual(dots, PIKACHU_DOWN_A)) {
      dispatch(downB())
    } else if (direction === 'down' && _.isEqual(dots, PIKACHU_DOWN_B)) {
      dispatch(downA())
    } else if (direction === 'up' && _.isEqual(dots, PIKACHU_UP_A)) {
      dispatch(upB())
    } else if (direction === 'up' && _.isEqual(dots, PIKACHU_UP_B)) {
      dispatch(upA())
    } else if (direction === 'right' && _.isEqual(dots, PIKACHU_RIGHT_A)) {
      dispatch(rightB())
    } else if (direction === 'right' && _.isEqual(dots, PIKACHU_RIGHT_B)) {
      dispatch(rightA())
    } else if (direction === 'left' && _.isEqual(dots, PIKACHU_LEFT_A)) {
      dispatch(leftB())
    } else if (direction === 'left' && _.isEqual(dots, PIKACHU_LEFT_B)) {
      dispatch(leftA())
    }
  };
};
