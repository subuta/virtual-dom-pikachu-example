import h from 'snabbdom/h';
import {inject} from 'webapp/store.js'

import {
  decrement
} from 'webapp/actions/counter.js';

export default inject(({dispatch}) => {
  return h(`button`, {
    on: {
      click: function (ev) {
        dispatch(decrement());
      }
    },
    style: {
      height: '20px'
    }
  }, ['decrement']);
});
