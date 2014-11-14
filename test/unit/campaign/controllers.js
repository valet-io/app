'use strict';

var angular = require('angular');

module.exports = function () {

  describe('Campaign', function () {

    it('publishes the campaign on the scope', angular.mock.inject(function ($injector) {
      var scope = $injector.get('$rootScope').$new();
      var campaign = {};
      $injector.get('$controller')('CampaignController', {
         $scope: scope,
         campaign: campaign
       });
      expect(scope.campaign).to.equal(campaign);
    }));

  });
};
