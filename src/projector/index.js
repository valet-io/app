'use strict';

require('angular')
  .module('Projector', [
    'ui.router',
    'ngFitText',
    require('angular-animate-change')
  ])
  .value('screenfull', require('screenfull'))
  .controller('ProjectorController', require('./controller'))
  .filter('reverse', require('./reverse'))
  .config(require('./states'))
  .config(allowAssets);

function allowAssets ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://assets.valet.io/**'
  ]);
}
allowAssets.$inject = ['$sceDelegateProvider'];

module.exports = 'Projector';
