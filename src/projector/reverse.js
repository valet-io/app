'use strict';

import angular from 'angular';

export default function () {
  return function (input) {
    if (!angular.isArray(input)) return input;
    return input.slice().reverse();
  };
}
