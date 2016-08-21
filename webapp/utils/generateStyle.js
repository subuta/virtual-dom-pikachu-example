import postcssJs from 'postcss-js';
import easings from 'postcss-easings';
import autoprefixer from 'autoprefixer';
import freeStyle from 'free-style';
import i from 'icepick';
import _ from 'lodash';
// import { paramCase } from 'change-case';

// Create a container instance.
const Style = freeStyle.create();
let classes = {};
let keyframes = {};

export const addChangeListener = fn => Style.addChangeListener(fn);
export const removeChangeListener = fn => Style.removeChangeListener(fn);

export const resetStyles = () => {
  classes = {};
  keyframes = {};
};

// allow call register with null value.
export const registerStyles = (styles = {}) => {
  _.each(styles, (style, key) => {
    registerStyle(key, style);
  });
  return classes;
};

const isStrict = false;
export const registerStyle = (key, style) => {
  if (isStrict && classes[key]) {
    throw new Error(`style of ${key} is already registered!`);
  }

  let plugins = [
    easings,
    autoprefixer
  ];

  const postcss = postcssJs.sync(plugins);

  // const className = paramCase('my-' + key);
  // inject style to free-style.
  const uniqueKey = Style.registerStyle(postcss(style));

  classes[key] = uniqueKey;
  return uniqueKey;
};

export const registerKeyframes = (_keyframes) => {
  _.each(_keyframes, (keyframe, key) => registerKeyframe(key, keyframe));
  return keyframes;
};

export const registerKeyframe = (key, keyframe) => {
  // inject keyframe to free-style.
  const uniqueKey = Style.registerKeyframes(keyframe);
  keyframes[key] = uniqueKey;
  return uniqueKey;
};

export const registerRules = (rules) => {
  _.each(rules, (rule, key) => registerRule(key, rule));
};

export const registerRule = (key, rule) => {
  // inject rule to free-style.
  Style.registerRule(key, rule);
};

export const getCSS = () => {
  return Style.getStyles();
};
