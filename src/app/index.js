'use strict';

var angular = require('angular');
var config  = require('./config');

angular.module('config', [])
  .constant('config', config);

var requires = [
  'config',
  'ui.router',
  require('angular-router-exception-handler'),
  'ngAnimate',
  require('angular-loading'),
  require('convex'),
  require('convex-firebase'),
  require('valet-io-pledge-models'),
  require('valet-io-directives'),
  require('../campaign'),
  require('../projector')
];

/* istanbul ignore next */
if (config.sentry) {
  requires.push('ngRaven');
}

angular
  .module('ValetApp', requires)
  .controller('AppController', require('./controller'))
  .config(provideStripe)
  .config(configure);

function configure (convexConfig, $locationProvider, config) {
  convexConfig.base = config.valet.api;
  convexConfig.firebase = config.firebase.endpoint;
  $locationProvider.html5Mode(true);
}
configure.$inject = ['convexConfig', '$locationProvider', 'config'];

// temporarily provide a dummy stripe service
// we don't need it yet but the payment model (external) depends on it
function provideStripe ($provide) {
  $provide.value('stripe', {});
}
provideStripe.$inject = ['$provide'];

/* istanbul ignore next */
if (config.sentry) {
  angular.module('ngRaven').constant('RavenConfig', config.sentry);
}

module.exports = 'ValetApp';
