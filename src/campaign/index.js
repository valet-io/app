'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import convex from 'convex';
import convexFirebase from 'convex-firebase';
import models from 'valet-io-pledge-models';
import live from 'angular-live-or-test';
import admin from '../admin';
import dashboard from '../dashboard';
import autofocus from './autofocus';
import states from './states';
import CampaignDashboardController from './controller';

export default angular.module('valetApp.campaign', [
  router,
  convex,
  convexFirebase,
  models,
  live,
  admin,
  dashboard
])
.controller('CampaignDashboardController', CampaignDashboardController)
.directive('autofocus', autofocus)
.config(states)
.name;
