'use strict';

var screenfull = require('screenfull');

module.exports = function ($scope, campaign, $document) {
  $scope.campaign = campaign;
  $scope.fullscreen = screenfull;
  $document.on(screenfull.raw.fullscreenchange, function () {
    $scope.$digest();
  });
};
module.exports.$inject = ['$scope', 'campaign', '$document'];
