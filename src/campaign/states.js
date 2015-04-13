'use strict';

import dashboard from './views/dashboard.html';

states.$inject = ['$stateProvider'];
function states ({state}) {
  state('campaigns', {
    parent: 'admin',
    abstract: true,
    url: '/campaigns',
    views: {
      content: {
        template: '<div ui-view="content" name="campaigns"></div>'
      }
    }
  });
  state('campaign', {
    parent: 'campaigns',
    abstract: true,
    url: '/:id?{test:bool}',
    resolve: {
      campaign: campaign
    },
    views: {
      content: {
        template: '<div ui-view="content" name="campaign"></div>'
      }
    }
  });
  state('campaign.dashboard', {
    url: '',
    resolve: {
      campaign: subscribe
    },
    views: {
      content: {
        controller: 'CampaignDashboardController',
        controllerAs: 'dashboard',
        template: dashboard
      }
    }
  });
}

campaign.$inject = ['Campaign', '$stateParams', 'live'];
function campaign (Campaign, {id, test}, live) {
  live.enabled(!test);
  return new Campaign({id})
    .$fetch({
      expand: ['domain']
    });
}

subscribe.$inject = ['campaign', '$q'];
function subscribe (campaign, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe()
  ])
  .then(() => {
    return campaign;
  });
}

export default states;
