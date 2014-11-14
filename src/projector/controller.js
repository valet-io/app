'use strict';

module.exports = function ($scope) {
  $scope.fullscreen = require('screenfull');;
};
module.exports.$inject = ['$scope'];
