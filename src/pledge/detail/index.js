'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import convex from 'convex';
import models from 'valet-io-pledge-models';
import live from 'angular-live-or-test';

export default angular.module('valetApp.pledge.detail', [
  router,
  convex,
  models,
  live
])
.name;
