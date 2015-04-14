'use strict';

import template from './pledge.html';

export default states;

states.$inject = ['$stateProvider'];
function states ({state}) {
  state('pledge', {
    parent: 'pledges',
    url: '/:id',
    resolve: {
      pledge: getPledge
    },
    views: {
      content: {
        controller: 'PledgeDetailController',
        controllerAs: 'detail',
        template
      }
    }
  });
}

getPledge.$inject = ['Pledge', '$stateParams'];
function getPledge (Pledge, {id}) {
  return new Pledge({id})
    .$fetch({
      expand: ['campaign', 'donor', 'payments']
    });
}
