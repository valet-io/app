'use strict';

require('angular-ui-router');

require('angular')
  .module('Campaign', [
    require('ng-base-model'),
    'ui.router'
  ])
  .factory('Campaign', [
    'BaseModel',
    require('./model')
  ])
  .config([
    '$stateProvider'
    require('./routes')
  ])
});

module.exports = 'Campaign';
