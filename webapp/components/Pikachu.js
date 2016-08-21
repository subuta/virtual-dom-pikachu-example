import h from 'snabbdom/h';

import {connect, inject} from 'webapp/store.js'
import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'

import * as pikachuActions from 'webapp/actions/pikachu.js';
import {getDots} from 'webapp/reducers/pikachu.js';

const mapStateToProps = createSelector(
  getDots,
  (dots) => {
    return {
      dots
    }
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(pikachuActions, dispatch)
  }
};

export default inject(({props}) => {
    console.log('[pikachu] rendered');
    console.log(props);
    return h(`span`, {
      on: {
        'click': function (ev) {
          return props.downA();
        }
      }
    }, [JSON.stringify(props.dots)]);
  },
  mapStateToProps,
  mapDispatchToProps
);
