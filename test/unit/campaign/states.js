'use strict';

var angular = require('angular');

module.exports = function () {
  var $injector, config, $state, $httpBackend;
  beforeEach(angular.mock.inject(function (_$injector_) {
    $injector    = _$injector_;
    $httpBackend = $injector.get('$httpBackend');
    config       = $injector.get('config');
    $state       = $injector.get('$state');
  }));

  describe('single', function () {

    it('resolves the campaign by id', angular.mock.inject(function ($injector) {
      $httpBackend
        .expectGET(config.valet.api + '/campaigns/theId')
        .respond(200, {
          id: 'theId'
        });
      $injector.get('$resolve').resolve($state.get('campaign').resolve, {
        $stateParams: {
          id: 'theId'
        }
      })
      .then(function (resolved) {
        expect(resolved.campaign).to.have.property('id', 'theId');
      });
      $httpBackend.flush();
    }));

  });

};
