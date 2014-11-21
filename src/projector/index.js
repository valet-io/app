'use strict';

require('angular')
  .module('Projector', [
    'ui.router',
    'ngFitText'
  ])
  .value('screenfull', require('screenfull'))
  .controller('ProjectorController', require('./controller'))
  .filter('reverse', require('./reverse'))
  .directive('flash', require('./flash'))
  .config(require('./states'));

module.exports = 'Projector';
