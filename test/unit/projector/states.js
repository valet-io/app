'use strict';

var angular = require('angular');

module.exports = function () {
  var $injector, campaign, config, $state, $timeout;
  beforeEach(angular.mock.inject(function (_$injector_) {
    $injector    = _$injector_;
    $state       = $injector.get('$state');
    $timeout     = $injector.get('$timeout');
    config       = {};
    campaign = {
      $subscribe: sinon.stub(),
      pledges: {
        $subscribe: sinon.stub()
      }
    };
  }));

  function resolve () {
    return $injector.invoke($state.get('projector').resolve.campaign, void 0, {
      campaign: campaign,
      projectorConfig: config
    });
  }

  it('configures the projector sidebar', function () {
    $injector.get('$resolve').resolve($state.get('projector').resolve)
      .then(function (resolved) {
        expect(resolved.projectorConfig)
          .to.have.property('donorCount')
          .that.is.a('number');
      });
    $timeout.flush();
  });

  it('subscribes to aggregates and options', function () {
    resolve();
    $timeout.flush();
    expect(campaign.$subscribe).to.have.been.calledWithMatch([
      'aggregates',
      'options'
    ], true);
  });

  it('subscribes to pledges', function () {
    config.donorCount = 10;
    resolve();
    $timeout.flush();
    expect(campaign.pledges.$subscribe)
      .to.have.been.calledWithMatch({
        query: {
          limitToLast: 10
        }
      });
  });

  it('resolves the campaign', function () {
    resolve().then(function (_campaign_) {
      expect(campaign).to.equal(_campaign_);
    });
    $timeout.flush();
  });

};
