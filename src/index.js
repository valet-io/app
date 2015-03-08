'use strict';

import raven from './raven';
import angular from 'angular';
import animate from 'angular-animate';
import router from 'angular-ui-router';
import convex from 'convex';
import convexFirebase from 'convex-firebase';
import models from 'valet-io-pledge-models';
import directives from 'valet-io-directives';
import logo from 'angular-valet-logo'; 
import attachFastClick from 'fastclick';
import app from './app';
import campaign from './campaign';
import projector from './projector';
import config from './config';

export default angular.module('valetApp', [
  raven,
  animate,
  router,
  convex,
  convexFirebase,
  models,
  directives,
  logo,
  app,
  campaign,
  projector
])
.constant('config', config)
.config(html5Mode)
.config(configureConvex)
.config(stripe)
.run(fastClick)
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

fastClick.$inject = ['$document'];
function fastClick ($document) {
  attachFastClick($document[0].body);
}
