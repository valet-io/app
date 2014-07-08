'use strict';

var angular = require('angular');

module.exports = function () {
  return function (input) {
    if (!angular.isArray(input)) return input;
    return input.slice().reverse();
  };
};
