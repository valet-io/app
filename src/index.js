'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import convex from 'convex';
import convexFirebase from 'convex-firebase';
import models from 'valet-io-pledge-models';
import directives from 'valet-io-directives';
import app from './app';
import campaign from './campaign';
import projector from './projector';
import config from './config';

export default angular.module('valetApp', [
  router,
  convex,
  convexFirebase,
  models,
  directives,
  app,
  campaign,
  projector
])
.constant('config', config)
.config(html5Mode)
.config(configureConvex)
.config(stripe)
.name;

html5Mode.$inject = ['$locationProvider'];
function html5Mode ($locationProvider) {
  $locationProvider.html5Mode(true);
}

configureConvex.$inject = ['convexConfig', 'config'];
function configureConvex (convexConfig, config) {
  convexConfig.base = config.valet.api;
  convexConfig.firebase = config.firebase.endpoint;
}

stripe.$inject = ['$provide'];
function stripe ($provide) {
  $provide.value('stripe', {});
}
