'use strict';

var resolve = {
  campaign: function (Campaign, $stateParams) {
    return new Campaign({id: $stateParams.id}).$fetch();
  }
};

resolve.campaign.$inject = ['Campaign', '$stateParams'];

module.exports = function ($stateProvider) {
  $stateProvider
    .state('campaign', {
      abstract: true,
      template: '<div ui-view class="full-height"></div>',
      url: '/campaigns/:id',
      controller: [
        '$scope',
        'campaign',
        function ($scope, campaign) {
          $scope.campaign = campaign;
        }
      ],
      resolve: resolve
    });
};
