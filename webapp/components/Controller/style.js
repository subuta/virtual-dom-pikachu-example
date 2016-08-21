import {
  DOT_SIZE
} from 'webapp/constants/dots.js';

export const CONTROLLER = {
  margin: '32px 0 0',
  position: 'relative',
  height: DOT_SIZE * 24,
  width: DOT_SIZE * 24
};

export const CONTROLLER_BUTTON = {
  margin: 0,
  padding: 0,
  height: DOT_SIZE * 8,
  width: DOT_SIZE * 8,
  fontSize: 10,
  fontWeight: 'bold',
  backgroundColor: '#414149',
  '&:hover': {
    backgroundColor: '#616169'
  }
};

export const CONTROLLER_BUTTON_UP = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  left: DOT_SIZE * 8,
  top: 0,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2
};

export const CONTROLLER_BUTTON_DOWN = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  left: DOT_SIZE * 8,
  bottom: 0,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2
};

export const CONTROLLER_BUTTON_CENTER = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  left: DOT_SIZE * 8,
  bottom: DOT_SIZE * 8,
  pointerEvents: 'none'
};

export const CONTROLLER_BUTTON_RIGHT = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  right: 0,
  top: DOT_SIZE * 8,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 2
};

export const CONTROLLER_BUTTON_LEFT = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  left: 0,
  top: DOT_SIZE * 8,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
};

export default {
  CONTROLLER,
  CONTROLLER_BUTTON,
  CONTROLLER_BUTTON_UP,
  CONTROLLER_BUTTON_DOWN,
  CONTROLLER_BUTTON_CENTER,
  CONTROLLER_BUTTON_RIGHT,
  CONTROLLER_BUTTON_LEFT,
}
