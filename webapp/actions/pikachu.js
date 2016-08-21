import {
  PIKACHU_DOWN_A
} from 'webapp/constants/dots.js';

export const downA = () => {
  return {
    type: 'toggle',
    payload: PIKACHU_DOWN_A
  }
};

// export const downB = () => {
//   return {
//     type: 'toggle'
//   }
// };
