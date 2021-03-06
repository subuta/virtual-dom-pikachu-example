import {
  DOT_SIZE
} from 'webapp/constants/dots.js';

const COLOR = '#313131';

export const PIKACHU_WRAPPER = {
  position: 'relative',
  display: 'inline-block'
};

export const PIKACHU = {
  margin: 12,
  position: 'relative',
  width: DOT_SIZE * 18,
  border: '1px solid #BBBBBB'
};

export const FPS = {
  position: 'absolute',
  right: 0,
  top: '50%',
  fontSize: 16,
  transform: 'translateX(100%)'
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
  PIKACHU_WRAPPER,
  PIKACHU,
  FPS,
  ROW,
  DOT,
  DOT_GRAY,
  DOT_OFF
}
