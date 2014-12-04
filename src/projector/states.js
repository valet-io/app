'use strict';

var isUrl = require('is-url');

module.exports = function ($stateProvider) {
  $stateProvider
    .state('projector', {
      parent: 'campaign.single',
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
};
module.exports.$inject = ['$stateProvider'];

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
subscribe.$inject = ['campaign', 'projectorConfig', '$q'];

function templateUrls (campaign) {
  return angular.extend({
    main: '/views/projector/main.html',
    sidebar: '/views/projector/sidebar.html'
  }, campaign.metadata.templates);
}
templateUrls.$inject = ['campaign'];

function getCss (campaign, $templateRequest) {
  var css = campaign.metadata.css;
  if (css && isUrl(css.projector)) {
    return $templateRequest(css.projector)
      .then(function (styles) {
        return (css.projector = styles);
      });
  }
}
getCss.$inject = ['campaign', '$templateRequest'];
