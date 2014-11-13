'use strict';

require('angular')
  .module('Campaign', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    require('./routes')
  ]);

module.exports = 'Campaign';
