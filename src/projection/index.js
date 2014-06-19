'use strict';

require('angular')
  .module('Projection', [
    'ui.router'
  ])
  .controller('ProjectionController', [
    '$scope',
    'campaign',
    require('./controller')
  ])
  .config([
    '$stateProvider',
    require('./routes')
  ]);

module.exports = 'Projection';
