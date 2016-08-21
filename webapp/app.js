import snabbdom from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import h from 'snabbdom/h';

import store, {inject} from './store.js'
import Pikachu from './components/Pikachu.js';

const patch = snabbdom.init([ // Init patch function with choosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventlistenersModule // attaches event listeners
]);

// childrenのみを書き換えるパターン
const render = inject(({dispatch, state}) => {
  return h('div#app-container', {
    style: {
    }
  }, [
    Pikachu()
  ]);
});

let container = document.querySelector('#app-container');

// Patch into empty DOM element – this modifies the DOM as a side effect
let tree = render(); // We need an initial tree
patch(container, tree);

// - with diff then patch(efficient way / with vdom)
const update = () => {
  var newTree = render();
  patch(tree, newTree);
  tree = newTree;
};

const unSubscribe = store.subscribe(update);

export const _reload = () => {
  update();
};

export const _unload = () => {
  unSubscribe();
};
