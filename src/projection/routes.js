'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projection', {
      parent: 'campaign',
      controller: 'ProjectionController',
      url: '/projection',
      template: 'Campaign {{campaign.id}}'
    });
};
