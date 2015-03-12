'use strict';

import template from './pledge.html';

export default states;

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  $stateProvider
    .state('pledge', {
      parent: 'pledges',
      url: '/:id',
      template: template
    });
}
