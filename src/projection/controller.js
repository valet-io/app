'use strict';

// TODO: Clean up and move full screen logic to a proper service

var screenfull = require('screenfull');

module.exports = function ($scope, campaign, $document) {
  // campaign.pledges.$subscribe();
  $scope.fullscreen = screenfull;
  if (screenfull) {
    $document.on(screenfull.raw.fullscreenchange, function () {
      $scope.$digest();
    });
  }
};
