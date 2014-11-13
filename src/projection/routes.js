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
          '$q',
          function (campaign, $q) {
            return $q.all([
              campaign.$subscribe(['aggregates', 'options'], true),
              campaign.pledges.$subscribe()
            ]);
          }
        ]
      }
    });
};
