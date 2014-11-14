'use strict';

require('angular')
  .module('Projector', [
    'ui.router',
    'ngFitText'
  ])
  .controller('ProjectorController', require('./controller'))
  .filter('reverse', require('./reverse'))
  .config(require('./states'));

module.exports = 'Projector';
