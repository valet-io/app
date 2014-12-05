'use strict';

var round = require('round');

module.exports = function () {
  return function (value, multiple, direction) {
    if (typeof value !== 'number') return;
    if (multiple && typeof multiple !== 'number') {
      direction = multiple;
      multiple = 1;
    }
    return round(value, multiple, {
      direction: direction
    });
  };
};
