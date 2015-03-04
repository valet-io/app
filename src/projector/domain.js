'use strict';

import template from './views/domain.html';

export default function () {
  return {
    scope: {
      baseName: '=name'
    },
    bindToController: true,
    controller: DomainController,
    controllerAs: 'domain',
    template
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
