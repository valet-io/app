'use strict';

import template from './statistic.html';

export default function () {
  return {
    restrict: 'EA',
    template,
    scope: {
      title: '@'
    },
    transclude: true,
    link: function (scope, element) {
      element.addClass('panel-content');
    }
  };
}
