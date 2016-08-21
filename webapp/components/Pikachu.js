import h from 'snabbdom/h';
import _ from 'lodash';

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

const getDotClass = (dot) => {
  if (dot === 0) {
    return '.dot--off';
  }
  return '.dot';
};

// render Pikachu from dots.
const renderPikachu = (dots) => {
  return h(`span.pikachu`, {}, _.map(dots, (row, rowIdx) => {
    return h(`span.row.n${rowIdx}`, {}, _.map(row, (col, colIdx) => {
      return h(`span.col.n${colIdx}${getDotClass(col)}`, {}, [String(col)]);
    }));
  }));
};

export default inject(({props}) => {
    console.log('[pikachu] rendered');
    console.log(renderPikachu(props.dots));
    return h(`span`, {
      on: {
        'click': function (ev) {
          return props.downA();
        }
      }
    }, [renderPikachu(props.dots)]);
  },
  mapStateToProps,
  mapDispatchToProps
);
