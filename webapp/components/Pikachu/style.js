import {
  DOT_SIZE
} from 'webapp/constants/dots.js';

const COLOR = '#313131';

export const PIKACHU = {
  margin: 16,
  position: 'relative',
  width: DOT_SIZE * 18,
  border: '1px solid #BBBBBB'
};

export const ROW = {
  display: 'block',
  fontSize: 0,
  height: DOT_SIZE,
  width: DOT_SIZE * 18
};

export const DOT = {
  display: 'inline-block',
  height: DOT_SIZE,
  width: DOT_SIZE,
  fontSize: 0,
  backgroundColor: COLOR
};

export const DOT_GRAY = {
  ...DOT,
  backgroundColor: '#BBBBBB'
};

export const DOT_OFF = {
  ...DOT,
  backgroundColor: '#FFFFFF'
};

export default {
  PIKACHU,
  ROW,
  DOT,
  DOT_GRAY,
  DOT_OFF
}
