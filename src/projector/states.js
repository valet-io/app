'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign.single',
      controller: 'ProjectorController',
      url: '/projector',
      templateUrl: '/views/projector/campaign.html',
      resolve: {
        campaign: subscribe
      }
    });
};
module.exports.$inject = ['$stateProvider'];

function subscribe (campaign, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe()
  ])
  .then(function () {
    return campaign;
  });
}
subscribe.$inject = ['campaign', '$q'];