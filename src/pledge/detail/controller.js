'use strict';

export default PledgeDetailController;

PledgeDetailController.$inject = ['$scope', 'pledge'];
function PledgeDetailController ($scope, pledge) {
  $scope.pledge = pledge;
}