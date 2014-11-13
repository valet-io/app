'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projection', {
      parent: 'campaign',
      controller: 'ProjectionController',
      url: '/projection',
      templateUrl: '/views/projection/campaign.html'
    });
};
