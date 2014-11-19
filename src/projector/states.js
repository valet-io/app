'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign.single',
      abstract: true,
      controller: 'ProjectorController',
      templateUrl: '/views/projector/index.html',
      resolve: {
        subscribe: subscribe
      }
    })
    .state('projector.default', {
      url: '/projector',
      views: {
        main: {
          templateUrl: '/views/projector/main.html'
        },
        sidebar: {
          templateUrl: '/views/projector/sidebar.html'
        }
      }
    })
};
module.exports.$inject = ['$stateProvider'];

function subscribe (campaign, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe()
  ]);
}
subscribe.$inject = ['campaign', '$q'];
