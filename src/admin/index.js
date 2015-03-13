'use strict';

import angular from 'angular';
import state from './state';

export default angular.module('valetApp.admin', [])
  .config(state)
  .name;
