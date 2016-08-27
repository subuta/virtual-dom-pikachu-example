import h from 'snabbdom/h';
import _ from 'lodash';

import {inject} from 'webapp/store.js'
import {createSelector} from 'reselect';

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

const classes = registerStyles(style);

const getDotClass = (dot) => {
  if (dot === 0) {
    return classes.DOT_OFF;
  } else if (dot === 2) {
    return classes.DOT_GRAY;
  }
  return classes.DOT;
};

// render Pikachu from dots.
const renderPikachu = (dots) => {
  // console.log('renderPikachu');
  return h('div', {class: {[classes.PIKACHU]: true}}, _.map(dots, (row, rowIndex) => {
    return h('div', {class: {[classes.ROW]: true, [`row${rowIndex}`]: true}}, _.map(row, (col, colIndex) => {
      return h('span', {class: {[`col${colIndex}`]: true, [getDotClass(col)]: true}}, ['']);
    }));
  }));
};

export default inject(({props}) => {
    // console.log('[pikachu] rendered');
    return h('div', {}, [renderPikachu(props.dots)]);
  },
  mapStateToProps
);
