'use strict';

CampaignController.$inject = ['$scope', 'campaign'];
function CampaignController ($scope, campaign) {
  $scope.campaign = campaign;
  $scope.search = {};
  $scope.filterPledges = function (pledge) {
    return !$scope.search.name || (pledge.donor.name.indexOf($scope.search.name) !== -1);
  };
}

export default CampaignController;
