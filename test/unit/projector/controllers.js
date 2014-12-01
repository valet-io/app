'use strict';

var angular = require('angular');

module.exports = function () {

  describe('Projector', function () {

    var $controller, scope;
    beforeEach(angular.mock.inject(function ($injector) {
      $controller = $injector.get('$controller');
      scope       = $injector.get('$rootScope').$new();
    }));

    it('publishes screenfull on the scope', function () {
      $controller('ProjectorController', {
        $scope: scope,
        campaign: {},
        projectorConfig: {},
        templates: {}
      });
      expect(scope.fullscreen).to.equal(require('screenfull'));
    });

    it('publishes the campaign on the scope', function () {
      var campaign = {};
      $controller('ProjectorController', {
        $scope: scope,
        campaign: campaign,
        projectorConfig: {},
        templates: {}
      });
      expect(scope.campaign).to.equal(campaign);
    });

    it('publishes the projector config on the controller', angular.mock.inject(function ($injector) {
      var config = {}
      var controller = $controller('ProjectorController', {
        $scope: scope,
        campaign: {},
        projectorConfig: config,
        templates: {}
      });
      expect(controller.config).to.equal(config);
    }));

    it('publishes the templates on the controller', function () {
      var templates = {};
      var controller = $controller('ProjectorController', {
        $scope: scope,
        campaign: {},
        projectorConfig: {},
        templates: templates
      });
      expect(controller.templates).to.equal(templates);
    });

    it('triggers a digest on fullscreen change', function () {
      $controller('ProjectorController', {
        $scope: scope,
        campaign: {},
        projectorConfig: {},
        screenfull: {
          raw: {
            fullscreenchange: 'fscevent' 
          }
        },
        templates: {}
      });
      sinon.stub(scope, '$digest');
      angular.element(document).triggerHandler('fscevent');
      expect(scope.$digest).to.have.been.called;
    });

    it('only triggers with fullscreen support', function () {
      $controller('ProjectorController', {
        $scope: scope,
        campaign: {},
        projectorConfig: {},
        screenfull: false,
        templates: {}
      });
      sinon.stub(scope, '$digest');
      angular.element(document).triggerHandler('fscevent');
      expect(scope.$digest).to.not.have.been.called;
    });

  });

};
