'use strict';

var angular = require('angular');

describe('Campaign: States', function () {

  beforeEach(angular.mock.module(require('../../../')));

  describe('campaign', function () {

    it('fetches the campaign based on the url', angular.mock.inject(function ($resolve, $timeout, $state, $q) {
      var campaign = {
        fetch: sinon.stub().returns({
          then: function () {
            return $q.when(campaign)
          }
        })
      };
      var Campaign = sinon.stub().returns(campaign);
      $resolve.resolve($state.get('campaign').resolve, {
        Campaign: Campaign,
        $stateParams: {
          id: 'id'
        }
      })
      .then(function (resolved) {
        expect(Campaign).to.have.been.calledWith({
          id: 'id'
        });
        expect(resolved.campaign).to.equal(campaign);
        expect(campaign.fetch).to.have.been.called;
      });
      $timeout.flush();
    }));

  });

});
