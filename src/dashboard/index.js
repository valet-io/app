'use strict';

import angular from 'angular';
import statistic from './statistic';
import {row, extra} from './row';

export default angular.module('valetApp.dashboard', [])
  .directive('statistic', statistic)
  .directive('pledgeRow', row)
  .directive('pledgeRowExtra', extra)
  .name;
