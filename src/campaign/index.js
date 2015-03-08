'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import convex from 'convex';
import convexFirebase from 'convex-firebase';
import models from 'valet-io-pledge-models';
import live from 'angular-live-or-test';
import dashboard from '../dashboard';
import states from './states';
import CampaignController from './controller';

export default angular.module('valetApp.campaign', [
  router,
  convex,
  convexFirebase,
  models,
  live,
  dashboard
])
.controller('CampaignController', CampaignController)
.config(states)
.name;
