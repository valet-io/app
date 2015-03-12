'use strict';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider
    .state('pledges', {
      url: '/pledges',
      abstract: true,
      template: '<div ui-view></div>'
    });
}
