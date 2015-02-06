'use strict';

var angular = require('angular');
var util    = require('../../util');

module.exports = function () {
  var $injector, config, $state, $httpBackend;
  beforeEach(angular.mock.inject(function (_$injector_) {
    $injector    = _$injector_;
    $httpBackend = $injector.get('$httpBackend');
    config       = $injector.get('config');
    $state       = $injector.get('$state');
  }));

  describe('single', function () {

    it('resolves the campaign by id with the domain', angular.mock.inject(function ($injector) {
      $httpBackend
        .expectGET(util.encodeBrackets(config.valet.api + '/campaigns/theId?expand[0]=domain'))
        .respond(200, {
          id: 'theId',
          domain_id: 'theDomainId',
          domain: {
            id: 'theDomainId'
          }
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
