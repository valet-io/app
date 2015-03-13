'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import admin from '../admin';
import state from './state';
import detail from './detail';

export default angular.module('valetApp.pledge', [
  router,
  admin,
  detail
])
.config(state)
.name;
