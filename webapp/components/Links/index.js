import h from 'snabbdom/h';

import {registerStyles} from 'webapp/utils/generateStyle.js';
import style from './style.js';

const classes = registerStyles(style);
export default () => {
  return h('div', {class: {[classes.LINKS]: true}}, [
    h('a', {
      class: {[classes.LINK]: true},
      attrs: {href: 'https://github.com/subuta/virtual-dom-pikachu-example', target: '_blank'}
    }, 'https://github.com/subuta/virtual-dom-pikachu-example'),
    h('a', {
      class: {[classes.LINK]: true},
      attrs: {href: 'https://twitter.com/subuta_nico', target: '_blank'}
    }, 'subuta_nico')
  ]);
};
