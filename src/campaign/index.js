'use strict';

require('angular')
  .module('Campaign', [
    'ui.router',
    require('angular-live-or-test')
  ])
  .controller('CampaignController', require('./controllers').Campaign)
  .config(require('./states'));

module.exports = 'Campaign';
