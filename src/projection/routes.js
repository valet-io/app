'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projection', {
      parent: 'campaign',
      controller: 'ProjectionController',
      url: '/projection',
      templateUrl: '/views/projection/campaign.html',
      resolve: {
        campaign: [
          'campaign',
          function (campaign) {
            return campaign.$subscribe(['aggregates', 'options'], true);
          }
        ]
      }
    });
};
