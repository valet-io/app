'use strict';

var angular = require('angular');

module.exports = function () {

  describe('Dashboard', function () {

    it('publishes the campaign on the controller', angular.mock.inject(function ($injector) {
      var campaign = {};
      var controller = $injector.get('$controller')('CampaignDashboardController', {
         $scope: $injector.get('$rootScope').$new(),
         campaign: campaign
       });
      expect(controller.campaign).to.equal(campaign);
    }));

  });
};
