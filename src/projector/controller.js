'use strict';

ProjectorController.$inject = [
  '$scope',
  'campaign',
  'screenfull',
  'projectorConfig',
  '$document'
];
function ProjectorController ($scope, campaign, screenfull, projectorConfig, $document) {
  $scope.campaign = campaign;
  this.config = projectorConfig;
  $scope.fullscreen = screenfull;
  if (screenfull) {
    $document.on(screenfull.raw.fullscreenchange, function () {
      $scope.$digest();
    });
  }
}
export default ProjectorController;
