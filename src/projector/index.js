'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import round from 'angular-round';
import fittext from 'ngFitText';
import animateChange from 'angular-animate-change';
import screenfull from 'screenfull';
import ProjectorController from './controller';
import reverse from './reverse';
import donor from './donor';
import domain from './domain';
import states from './states';

export default angular.module('valetApp.projector', [
  router,
  round,
  fittext,
  animateChange
])
.value('screenfull', screenfull)
.controller('ProjectorController', ProjectorController)
.filter('reverse', reverse)
.directive('donor', donor)
.directive('domain', domain)
.config(states)
.config(allowAssets)
.name;

allowAssets.$inject = ['$sceDelegateProvider'];
function allowAssets ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://assets.valet.io/**'
  ]);
}
