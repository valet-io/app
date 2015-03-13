'use strict';

import projector from './views/projector.html';
import main from './views/main.html';
import sidebar from './views/sidebar.html';

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign',
      url: '/projector',
      resolve: {
        projectorConfig: function () {
          return {
            donorCount: 6
          };
        },
        campaign: subscribe
      },
      views: {
        '@': {
          template: projector,
          controller: 'ProjectorController',
          controllerAs: 'projector'
        },
        'header@': {
          template: ''
        },
        'footer@': {
          template: ''
        },
        'main@projector': {
          template: main
        },
        'sidebar@projector': {
          template: sidebar
        }
      }
    });
}

export default states;

subscribe.$inject = ['campaign', 'projectorConfig', '$q'];
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
