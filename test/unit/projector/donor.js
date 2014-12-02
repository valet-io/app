'use strict';

var donor = require('../../../src/projector/donor')();

module.exports = function () {
  
  var scope, element;
  beforeEach(angular.mock.inject(function ($injector) {
    $injector.get('$templateCache').put(donor.templateUrl, __html__['src/projector/views/donor.html']);
    scope   = $injector.get('$rootScope').$new();
    element = $injector.get('$compile')('<donor pledge="pledge" />')(scope);
  }));

  it('handles a normal pledge', function () {
    scope.pledge = {
      donor: {
        name: 'Ben'
      }
    };
    scope.$digest();
    expect(element.text()).to.contain('Ben');
  });

  it('handles an anonymous pledge', function () {
    scope.pledge = {
      anonymous: true,
      donor: {
        name: 'Ben'
      }
    };
    scope.$digest();
    expect(element.text()).to.contain('Anonymous');
    expect(element.text()).to.not.contain('Ben');
  });

};
