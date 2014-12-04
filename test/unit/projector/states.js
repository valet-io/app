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

  it('resolves the default templates', function () {
    expect($injector.invoke($state.get('projector').resolve.templates, void 0, {
      campaign: {
        metadata: {}
      }
    }))
    .to.deep.equal({
      main: '/views/projector/main.html',
      sidebar: '/views/projector/sidebar.html'
    });
  });

  it('can override the default templates', function () {
    expect($injector.invoke($state.get('projector').resolve.templates, void 0, {
      campaign: {
        metadata: {
          templates: {
            main: '/alternate/main.html'
          }
        }
      }
    }))
    .to.deep.equal({
      main: '/alternate/main.html',
      sidebar: '/views/projector/sidebar.html'
    });
  });

  it('can handle a css string', function () {
    campaign.metadata = {
      css: {
        projector: 'styles'
      }
    };
    $injector.invoke($state.get('projector').resolve.css, void 0, {
      campaign: campaign
    });
    expect(campaign.metadata.css.projector).to.equal('styles');
  });

  it('can handle a css url', function () {
    campaign.metadata = {
      css: {
        projector: 'http://assets.valet.io/styles.css'
      }
    };
    $injector.get('$templateCache').put('http://assets.valet.io/styles.css', 'remoteStyles');
    $injector.invoke($state.get('projector').resolve.css, void 0, {
      campaign: campaign
    });
    $timeout.flush();
    expect(campaign.metadata.css.projector).to.equal('remoteStyles');
  });

};
