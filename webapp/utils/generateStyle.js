import freeStyle from 'free-style';
import _ from 'lodash';

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

export const registerStyle = (key, style) => {
  // inject style to free-style.
  const uniqueKey = Style.registerStyle(style);
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
