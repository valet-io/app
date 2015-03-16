'use strict';

import template from './pledge.html';

export default states;

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  $stateProvider
    .state('pledge', {
      parent: 'pledges',
      url: '/:id',
      resolve: {
        pledge: getPledge
      },
      views: {
        content: {
          controller: 'PledgeDetailController',
          template
        }
      }
    });
}

getPledge.$inject = ['Pledge', '$stateParams'];
function getPledge (Pledge, $stateParams) {
  return new Pledge({
    id: $stateParams.id
  })
  .$fetch({
    expand: ['campaign', 'donor']
  });
}
