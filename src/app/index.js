'use strict'; 

require('angular')
  .module('ProjectorApp', [
    require('ng-base-model'),
    require('../campaign'),
    require('../projection')
  ])
  .controller('AppController', [
    require('./controller')
  ])
  .config([
    '$locationProvider',
    function ($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ])
  .config([
    'BaseModelProvider',
    function (BaseModelProvider) {
      BaseModelProvider.baseURL = 'http://api.valet.io';
    }
  ]);

module.exports = 'ProjectorApp';
