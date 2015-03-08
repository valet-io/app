'use strict';

import angular from 'angular';
import statistic from './statistic';

export default angular.module('valetApp.dashboard', [])
  .directive('statistic', statistic)
  .name;
