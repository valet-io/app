'use strict';

CampaignController.$inject = ['$scope', 'campaign'];
function CampaignController ($scope, campaign) {
  $scope.campaign = campaign;
}

export default CampaignController;
