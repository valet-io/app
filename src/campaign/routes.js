'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
    .state('campaign', {
      abstract: true,
      template: '<div ui-view class="full-height"></div>',
      url: '/campaigns/:id',
      resolve: {
        campaign: [
          'Campaign',
          '$stateParams',
          function (Campaign, $stateParams) {
            return new Campaign({id: $stateParams.id})
              .fetch()
              .then(function (campaign) {
                return campaign.listen();
              });
          }
        ]
      }
    });
};
