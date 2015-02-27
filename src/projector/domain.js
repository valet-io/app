'use strict';

export default function () {
  return {
    scope: {
      baseName: '=name'
    },
    bindToController: true,
    controller: DomainController,
    controllerAs: 'domain',
    templateUrl: '/views/projector/domain.html',
  };
}

DomainController.$inject = ['live'];
function DomainController (live) {
  Object.defineProperty(this, 'name', {
    get () {
      return (!live.enabled() ? 'test.' : '') + this.baseName;
    }
  });
}
