'use strict';

import dashboard from './views/dashboard.html';

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
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
      resolve: {
        campaign: campaign
      }
    })
    .state('campaign.dashboard', {
      template: dashboard,
      controller: 'CampaignDashboardController',
      controllerAs: 'dashboard',
      url: '',
      resolve: {
        campaign: subscribe
      }
    });
}

campaign.$inject = ['Campaign', '$stateParams', 'live'];
function campaign (Campaign, $stateParams, live) {
  live.enabled(!$stateParams.test);
  return new Campaign({id: $stateParams.id}).$fetch({
    expand: ['domain']
  });
}

subscribe.$inject = ['campaign', '$q'];
function subscribe (campaign, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe()
  ])
  .then(function () {
    return campaign;
  });
}

export default states;
