'use strict';

import projector from './views/projector.html';
import main from './views/main.html';
import sidebar from './views/sidebar.html';

export default states;

states.$inject = ['$stateProvider'];
function states ({state}) {
  state('projector', {
    parent: 'campaign',
    url: '/projector',
    resolve: {
      projectorConfig: () => {
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

subscribe.$inject = ['campaign', 'projectorConfig', '$q'];
function subscribe (campaign, {donorCount}, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe({
      query: {
        limitToLast: donorCount
      }
    })
  ])
  .then(() => {
    return campaign;
  });
}
