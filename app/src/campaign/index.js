'use strict'; 

module.exports = require('angular-cjs-module')('Campaign', [require('ng-base-model')], function (module) {
  module.factory('Campaign', [
    'BaseModel',
    require('./model')
  ]);
});
