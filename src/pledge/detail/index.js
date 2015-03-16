'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import convex from 'convex';
import models from 'valet-io-pledge-models';
import live from 'angular-live-or-test';
import Controller from './controller';
import states from './states';

export default angular.module('valetApp.pledge.detail', [
  router,
  convex,
  models,
  live
])
.controller('PledgeDetailController', Controller)
.config(states)
.name;
