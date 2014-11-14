'use strict';


module.exports = function ($stateProvider) {
  $stateProvider
    .state('campaign', {
      abstract: true,
      template: '<div ui-view></div>',
      url: '/campaigns'
    })
    .state('campaign.single', {
      abstract: true,
      template: '<div ui-view></div>',
      url: '/:id',
      controller: 'CampaignController',
      resolve: {
        campaign: campaign
      }
    });
};
module.exports.$inject = ['$stateProvider'];

function campaign (Campaign, $stateParams) {
  return new Campaign({id: $stateParams.id}).$fetch();
}
campaign.$inject = ['Campaign', '$stateParams'];