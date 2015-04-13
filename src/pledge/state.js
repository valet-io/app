'use strict';

export default state;

state.$inject = ['$stateProvider'];
function state ({state}) {
  state('pledges', {
    parent: 'admin',
    url: '/pledges',
    abstract: true,
    views: {
      content: {
        template: '<div ui-view="content" name="pledges"></div>'
      }
    }
  });
}
