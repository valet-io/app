'use strict';

import angular from 'angular';
import isUrl from 'is-url';

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign',
      abstract: true,
      resolve: {
        projectorConfig: function () {
          return {
            donorCount: 6
          };
        },
        campaign: subscribe,
        templates: templateUrls,
        css: getCss
      },
      views: {
        '@': {
          templateUrl: '/views/projector/index.html',
          controller: 'ProjectorController',
          controllerAs: 'projector'
        }
      }
    })
    .state('projector.default', {
      url: '/projector'
    });
}

export default states;

subscribe.$inject = ['campaign', 'projectorConfig', '$q'];
function subscribe (campaign, config, $q) {
  return $q.all([
    campaign.$subscribe(['aggregates', 'options'], true),
    campaign.pledges.$subscribe({
      query: {
        limitToLast: config.donorCount
      }
    })
  ])
  .then(function () {
    return campaign;
  });
}

templateUrls.$inject = ['campaign'];
function templateUrls (campaign) {
  return angular.extend({
    main: '/views/projector/main.html',
    sidebar: '/views/projector/sidebar.html'
  }, campaign.metadata.templates);
}

getCss.$inject = ['campaign', '$templateRequest'];
function getCss (campaign, $templateRequest) {
  var css = campaign.metadata.css;
  if (css && isUrl(css.projector)) {
    return $templateRequest(css.projector)
      .then(function (styles) {
        return (css.projector = styles);
      });
  }
}
