'use strict';

import header from './header.html';

export default state;

state.$inject = ['$stateProvider'];
function state ({state}) {
  state('admin', {
    abstract: true,
    views: {
      header: {
        template: header
      },
      '': {
        template: '<div ui-view="content" name="admin"></div>'
      }
    }
  });
}
