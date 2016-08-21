import h from 'snabbdom/h';
import {inject} from 'webapp/store.js'

import {
  increment
} from 'webapp/actions/counter.js';

export default inject(({dispatch}) => {
  return h(`button`, {
    on: {
      click: function (ev) {
        dispatch(increment());
      }
    },
    style: {
      height: '20px'
    }
  }, ['increment']);
});
