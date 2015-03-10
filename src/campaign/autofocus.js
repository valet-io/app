'use strict';

import angular from 'angular';

export default factory;

factory.$inject = ['$timeout']
function factory ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, $element) {
      const element = $element[0];
      $timeout(angular.bind(element, element.focus), 10);
    }
  };
}
