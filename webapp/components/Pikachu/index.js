import h from 'snabbdom/h';
import _ from 'lodash';

import {inject} from 'webapp/store.js'
import {createSelector} from 'reselect';
import { bindActionCreators } from 'redux'

import * as pikachuActions from 'webapp/actions/pikachu.js';
import {getDots} from 'webapp/reducers/pikachu.js';

import {registerStyles} from 'webapp/utils/generateStyle.js';
import style from './style.js';

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

const classes = registerStyles(style);

const getDotClass = (dot) => {
  if (dot === 0) {
    return classes.DOT_OFF;
  } else if (dot === 2) {
    return classes.DOT_GRAY;
  }
  return classes.DOT;
};

// 1. try to add memoize.

// render Pikachu from dots.
const renderPikachu = (dots) => {
  console.log('renderPikachu');
  return h(`div.${classes.PIKACHU}`, {}, _.map(dots, (row, rowIndex) => {
    return h(`div.${classes.ROW}.row${rowIndex}`, {}, _.map(row, (col, colIndex) => {
      return h(`span.col${colIndex}.${getDotClass(col)}`, {}, ['']);
    }));
  }));
};

export default inject(({props}) => {
    console.log('[pikachu] rendered');
    return h(`div`, {
      hook: {
        create: () => {
          console.log('create!');
          setInterval(() => {
            requestAnimationFrame(() => {
              props.alternate();
            });
          }, 1000 / 10); // 10fps
          // }, 1000 / 30); // 30fps
          // }, 1000 / 60); // 60fps
        }
      }
    }, [renderPikachu(props.dots)]);
  },
  mapStateToProps,
  mapDispatchToProps
);
