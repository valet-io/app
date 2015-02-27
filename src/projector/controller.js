'use strict';

ProjectorController.$inject = [
  '$scope',
  'campaign',
  'screenfull',
  'projectorConfig',
  'templates',
  '$document'
];
function ProjectorController ($scope, campaign, screenfull, projectorConfig, templates, $document) {
  $scope.campaign = campaign;
  this.config = projectorConfig;
  $scope.fullscreen = screenfull;
  if (screenfull) {
    $document.on(screenfull.raw.fullscreenchange, function () {
      $scope.$digest();
    });
  }
  this.templates = templates;
}
export default ProjectorController;
