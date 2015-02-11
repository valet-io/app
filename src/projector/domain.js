'use strict';

module.exports = function (live) {
  return {
    scope: {
      name: '='
    },
    templateUrl: '/views/projector/domain.html',
    link: function ($scope) {
      $scope.live = live;
    }
  };
};
module.exports.$inject = ['live'];
