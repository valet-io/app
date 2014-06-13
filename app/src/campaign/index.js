'use strict'; 

require('angular')
  .module('Campaign', [
    require('ng-base-model')
  ])
  .factory('Campaign', [
    'BaseModel',
    require('./model')
  ]);
});

module.exports = 'Campaign';
