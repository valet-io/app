'use strict';

CampaignDashboardController.$inject = ['$scope', 'campaign'];
function CampaignDashboardController ($scope, campaign) {
  this.campaign = campaign;
  this.search = {
    open: false,
    query: '',
    predicate: (pledge) => {
      const query = this.search.query;
      return !query || pledge.donor.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    },
    toggle: function () {
      this.open = !this.open;
      this.query = '';
      return this;
    },
    options: {
      debounce: 100
    }
  };
}

export default CampaignDashboardController;
