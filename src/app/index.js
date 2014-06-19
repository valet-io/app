'use strict'; 

require('angular')
  .module('ProjectorApp', [
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
  ]);

module.exports = 'ProjectorApp';
