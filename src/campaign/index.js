'use strict';

require('angular')
  .module('Campaign', [
    'ui.router'
  ])
  .controller('CampaignController', require('./controllers').Campaign)
  .config(require('./states'));

module.exports = 'Campaign';
