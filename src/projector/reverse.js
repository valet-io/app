'use strict';

import angular from 'angular';

export default function () {
  return function reverse (input) {
    if (!angular.isArray(input)) return input;
    return input.slice().reverse();
  };
}
