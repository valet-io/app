'use strict';

var angular = require('angular');
var config  = require('./config');

angular.module('config', [])
  .constant('config', config);

angular
  .module('ProjectorApp', [
    'config',
    require('ng-base-model'),
    require('../campaign'),
    require('../projection')
  ])
  .controller('AppController', [
    '$scope',
    require('./controller')
  ])
  .config([
    '$locationProvider',
    'BaseModelProvider',
    'config',
    function ($locationProvider, BaseModelProvider, config) {
      $locationProvider.html5Mode(true);
      BaseModelProvider.baseURL = config.valet.api;
    }
  ]);

module.exports = 'ProjectorApp';
