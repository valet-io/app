'use strict';

module.exports = function () {
  return {
    scope: {
      baseName: '=name'
    },
    bindToController: true,
    controller: DomainController,
    controllerAs: 'domain',
    templateUrl: '/views/projector/domain.html',
  };
};

function DomainController (live) {
  Object.defineProperty(this, 'name', {
    get: function () {
      return (!live.enabled() ? 'test.' : '') + this.baseName;
    }
  });
}
DomainController.$inject = ['live'];
