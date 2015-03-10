'use strict';

CampaignController.$inject = ['$scope', 'campaign'];
function CampaignController ($scope, campaign) {
  $scope.campaign = campaign;
  $scope.search = {};
  $scope.filterPledges = function (pledge) {
    return !$scope.search.name || (pledge.donor.name.toLowerCase().indexOf($scope.search.name.toLowerCase()) !== -1);
  };
}

export default CampaignController;
