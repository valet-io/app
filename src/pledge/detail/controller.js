'use strict';

import {annotate} from 'angular-annotation-decorator';

@annotate('$scope', 'pledge')
export default class PledgeDetailController {
  constructor ($scope, pledge) {
    this.pledge = $scope.pledge = pledge;
  }
  get paid () {
    return !!this.pledge.payments.length;
  }
  get payment () {
    const payments = this.pledge.payments;
    return payments[payments.length - 1];
  }
}
