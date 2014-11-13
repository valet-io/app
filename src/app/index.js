'use strict';

var angular = require('angular');
var config  = require('./config');

angular.module('config', [])
  .constant('config', config);

angular
  .module('ValetApp', [
    'config',
    require('angular-loading'),
    require('convex'),
    require('convex-firebase'),
    require('valet-io-pledge-models'),
    require('../campaign'),
    require('../projection')
  ])
  .controller('AppController', require('./controller'))
  .config(configure);

function configure (convexConfig, $locationProvider, config) {
  convexConfig.base = config.valet.api;
  convexConfig.firebase = config.firebase.endpoint;
  $locationProvider.html5Mode(true);
}
configure.$inject = ['convexConfig', '$locationProvider', 'config'];

module.exports = 'ValetApp';
