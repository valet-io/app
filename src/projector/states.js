'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign.single',
      abstract: true,
      resolve: {
        campaign: subscribe
      },
      views: {
        '@': {
          templateUrl: '/views/projector/index.html',
          controller: 'ProjectorController'
        }
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
  ])
  .then(function () {
    return campaign;
  });
}
subscribe.$inject = ['campaign', '$q'];
