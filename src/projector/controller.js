'use strict';

var screenfull = require('screenfull');

module.exports = function ($scope, campaign, projectorConfig, $document) {
  $scope.campaign = campaign;
  this.config = projectorConfig;
  $scope.fullscreen = screenfull;
  $document.on(screenfull.raw.fullscreenchange, function () {
    $scope.$digest();
  });
};
module.exports.$inject = ['$scope', 'campaign', 'projectorConfig', '$document'];
