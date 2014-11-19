'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign.single',
      abstract: true,
      resolve: {
        projectorConfig: function () {
          return {
            donorCount: 8 
          }
        },
        campaign: subscribe
      },
      views: {
        '@': {
          templateUrl: '/views/projector/index.html',
          controller: 'ProjectorController',
          controllerAs: 'projector'
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

function subscribe (campaign, config, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe({
      query: {
        limitToLast: config.donorCount
      }
    })
  ])
  .then(function () {
    return campaign;
  });
}
subscribe.$inject = ['campaign', 'projectorConfig', '$q'];
