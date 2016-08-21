import { registerRules } from 'webapp/utils/generateStyle.js';

export const Rules = {
  'html': {
    fontSize: '1em'
  },

  'body': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    margin: 0,
    padding: 0,
    fontSize: 0,
    lineHeight: 0
  },

  'p': {
  },

  'h1, h2, h3, h4': {
    margin: '1.414em 0 0.5em',
    fontWeight: 'inherit',
    lineHeight: '1.2'
  },

  'h1': {
    marginTop: 0,
    fontSize: '2.441em !important'
  },

  'h2': {
    fontSize: '1.953em !important'
  },

  'h3': {
    fontSize: '1.563em !important'
  },

  'h4': {
    fontSize: '1.25em !important'
  },

  'small, .font-small': {
    fontSize: '0.8em !important'
  },

  'button': {
    border: 'none',
    outline: 'none',
    appearance: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent'
  }
};

registerRules(Rules);

export const LAYOUT = {
  padding: '32px',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#FFFFFF'
};

export default {
  LAYOUT
};
