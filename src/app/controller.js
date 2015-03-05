'use strict';

AppController.$inject = ['syncLoaded'];
function AppController (syncLoaded) {
  syncLoaded(this);
}

export default AppController;
