'use strict';

require('angular')
  .module('CampaignModule', [
    require('ng-base-model')
  ])
  .factory('Campaign', [
    'BaseModel',
    require('./model')
  ]);

module.exports = 'CampaignModule';
