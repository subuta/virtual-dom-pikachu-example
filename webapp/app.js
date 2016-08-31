import _ from 'lodash';
import snabbdom from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import attrsModule from 'snabbdom/modules/attributes';
import styleModule from 'snabbdom/modules/style';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import h from 'snabbdom/h';

import store, {inject} from './store.js'
import { registerStyles, getCSS } from './utils/generateStyle.js';

import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'

import style from 'webapp/style.js';

import Pikachu from './components/Pikachu/index.js';
import Controller from './components/Controller/index.js';
import Links from './components/Links/index.js';

import * as pikachuActions from 'webapp/actions/pikachu.js';

const patch = snabbdom.init([ // Init patch function with choosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  attrsModule, // for setting attributes on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventlistenersModule // attaches event listeners
]);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(pikachuActions, dispatch)
  }
};

// keep timerId to stop setInterval on hmr.
const classes = registerStyles(style);
const render = inject(({props}) => {
  return h(`div#app-container`, {
    class: {[classes.LAYOUT]: true},
    hook: {create: () => props.animate(10)}
  }, [
    Pikachu(),
    Controller(),
    Links(),
    h('style', {}, [getCSS()])
  ]);
}, {}, mapDispatchToProps);

let container;
let tree; // We need an initial tree

// Patch into empty DOM element – this modifies the DOM as a side effect
const onDOMReady = () => {
  container = document.querySelector('#app-container');
  tree = render(); // We need an initial tree
  patch(container, tree);
};

// - with diff then patch(efficient way / with vdom)
const update = () => {
  var newTree = render();
  patch(tree, newTree);
  tree = newTree;
};

let unSubscribe = store.subscribe(update);

export const _reload = () => {
  console.log('reload!');
};

export const _unload = function() {
  unSubscribe();
  store.dispatch(pikachuActions.cancelAnimate());
  console.log('unload!');
};

// $(body).ready()的なの
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  onDOMReady();
} else {
  document.addEventListener('DOMContentLoaded', onDOMReady);
}
