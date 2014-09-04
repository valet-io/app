'use strict';

require('angular')
  .module('Projection', [
    'ui.router'
  ])
  .controller('ProjectionController', [
    '$scope',
    'campaign',
    '$document',
    require('./controller')
  ])
  .filter('reverse', require('./reverse'))
  .config([
    '$stateProvider',
    require('./routes')
  ]);

module.exports = 'Projection';
