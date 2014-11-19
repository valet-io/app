'use strict';

module.exports = function ($scope, campaign) {
  $scope.campaign = campaign;
  $scope.fullscreen = require('screenfull');;
};
module.exports.$inject = ['$scope', 'campaign'];
