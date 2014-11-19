'use strict';

var angular = require('angular');

module.exports = function () {

  describe('Projector', function () {

    it('publishes screenfull on the scope', angular.mock.inject(function ($injector) {
      var scope = $injector.get('$rootScope').$new();
      $injector.get('$controller')('ProjectorController', {
         $scope: scope,
         campaign: {}
       });
      expect(scope.fullscreen).to.equal(require('screenfull'));
    }));

    it('publishes the campaign on the scope', angular.mock.inject(function ($injector) {
      var scope = $injector.get('$rootScope').$new();
      var campaign = {};
      $injector.get('$controller')('ProjectorController', {
         $scope: scope,
         campaign: campaign
       });
      expect(scope.campaign).to.equal(campaign);
    }));

  });
};
