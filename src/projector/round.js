'use strict';

var round = require('round');

module.exports = function () {
  return function (value, multiple, direction) {
    if (value) return round(value, multiple, {
      direction: direction
    });
  };
};