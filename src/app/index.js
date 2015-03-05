'use strict';

import angular from 'angular';
import loading from 'angular-loading'
import AppController from './controller';

export default angular.module('valetApp.app', [
  loading
])
.controller('AppController', AppController)
.name;
