'use strict';

module.exports = function ($scope, campaign, screenfull, projectorConfig, templates, $document) {
  $scope.campaign = campaign;
  this.config = projectorConfig;
  $scope.fullscreen = screenfull;
  if (screenfull) {
    $document.on(screenfull.raw.fullscreenchange, function () {
      $scope.$digest();
    });
  }
  this.templates = templates;
};
module.exports.$inject = [
  '$scope',
  'campaign',
  'screenfull',
  'projectorConfig',
  'templates',
  '$document'
];
