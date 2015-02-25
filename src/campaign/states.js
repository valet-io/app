'use strict';


module.exports = function ($stateProvider) {
  $stateProvider
    .state('campaigns', {
      abstract: true,
      template: '<div ui-view></div>',
      url: '/campaigns'
    })
    .state('campaign', {
      parent: 'campaigns',
      abstract: true,
      template: '<div ui-view></div>',
      url: '/:id?{test:bool}',
      controller: 'CampaignController',
      resolve: {
        campaign: campaign
      }
    })
    .state('campaign.dashboard', {
      templateUrl: '/views/campaign/dashboard.html',
      url: '',
      resolve: {
        campaign: subscribe
      }
    });
};
module.exports.$inject = ['$stateProvider'];

function campaign (Campaign, $stateParams, live) {
  live.enabled(!$stateParams.test);
  return new Campaign({id: $stateParams.id}).$fetch({
    expand: ['domain']
  });
}
campaign.$inject = ['Campaign', '$stateParams', 'live'];

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
