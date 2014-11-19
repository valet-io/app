'use strict';

var angular = require('angular');

module.exports = function () {
  var $injector, campaign, $state, $timeout;
  beforeEach(angular.mock.inject(function (_$injector_) {
    $injector    = _$injector_;
    $state       = $injector.get('$state');
    $timeout     = $injector.get('$timeout');
    campaign = {
      $subscribe: sinon.stub(),
      pledges: {
        $subscribe: sinon.stub()
      }
    };
  }));

  function resolve () {
    return $injector.invoke($state.get('projector').resolve.campaign, void 0, {
      campaign: campaign
    });
  }

  it('subscribes to aggregates and options', function () {
    resolve();
    $timeout.flush();
    expect(campaign.$subscribe).to.have.been.calledWithMatch([
      'aggregates',
      'options'
    ], true);
  });

  it('subscribes to pledges', function () {
    resolve();
    $timeout.flush();
    expect(campaign.pledges.$subscribe).to.have.been.called;
  });

  it('resolves the campaign', function () {
    resolve().then(function (_campaign_) {
      expect(campaign).to.equal(_campaign_);
    });
    $timeout.flush();
  });

};