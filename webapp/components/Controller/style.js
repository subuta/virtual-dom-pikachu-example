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
  borderTopRightRadius: 2,
  '&:hover': {
    backgroundColor: '#FFBBBB !important'
  }
};

export const CONTROLLER_BUTTON_UP1 = {
  ...CONTROLLER_BUTTON_UP,
  '&:hover': {
    backgroundColor: '#FF8888 !important'
  }
};

export const CONTROLLER_BUTTON_UP2 = {
  ...CONTROLLER_BUTTON_UP1,
  backgroundColor: '#FF8888 !important',
  '&:hover': {
    backgroundColor: '#FF4444 !important'
  }
};

export const CONTROLLER_BUTTON_UP3 = {
  ...CONTROLLER_BUTTON_UP2,
  '&:hover': {
    backgroundColor: '#FF0000 !important'
  }
};

export const CONTROLLER_BUTTON_UP4 = {
  ...CONTROLLER_BUTTON_UP3,
  backgroundColor: '#414149',
  '&:hover': {
    backgroundColor: '#616169'
  }
};

export const CONTROLLER_BUTTON_DOWN = {
  ...CONTROLLER_BUTTON,
  position: 'absolute',
  left: DOT_SIZE * 8,
  bottom: 0,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
  '&:hover': {
    backgroundColor: '#FFBBBB !important'
  }
};

export const CONTROLLER_BUTTON_DOWN1 = {
  ...CONTROLLER_BUTTON_DOWN,
  '&:hover': {
    backgroundColor: '#FF8888 !important'
  }
};

export const CONTROLLER_BUTTON_DOWN2 = {
  ...CONTROLLER_BUTTON_DOWN1,
  '&:hover': {
    backgroundColor: '#FF4444 !important'
  }
};

export const CONTROLLER_BUTTON_DOWN3 = {
  ...CONTROLLER_BUTTON_DOWN2,
  backgroundColor: '#FF4444 !important',
  '&:hover': {
    backgroundColor: '#FF0000 !important'
  }
};

export const CONTROLLER_BUTTON_DOWN4 = {
  ...CONTROLLER_BUTTON_DOWN2,
  backgroundColor: '#414149',
  '&:hover': {
    backgroundColor: '#616169'
  }
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
  CONTROLLER_BUTTON_UP1,
  CONTROLLER_BUTTON_UP2,
  CONTROLLER_BUTTON_UP3,
  CONTROLLER_BUTTON_UP4,
  CONTROLLER_BUTTON_DOWN,
  CONTROLLER_BUTTON_DOWN1,
  CONTROLLER_BUTTON_DOWN2,
  CONTROLLER_BUTTON_DOWN3,
  CONTROLLER_BUTTON_DOWN4,
  CONTROLLER_BUTTON_CENTER,
  CONTROLLER_BUTTON_RIGHT,
  CONTROLLER_BUTTON_LEFT,
}
