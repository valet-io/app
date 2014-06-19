'use strict';

require('angular')
  .module('Campaign', [
    require('ng-base-model'),
    'ui.router',
    'firebase'
  ])
  .factory('Campaign', [
    'BaseModel',
    '$firebase',
    '$q',
    require('./model')
  ])
  .config([
    '$stateProvider',
    require('./routes')
  ]);

module.exports = 'Campaign';
