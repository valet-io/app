'use strict';

module.exports = function () {
  
  var scope, element;
  beforeEach(angular.mock.inject(function ($injector) {
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
    expect(element.text().trim()).to.equal('Ben');
  });

  it('handles an anonymous pledge', function () {
    scope.pledge = {
      anonymous: true,
      donor: {
        name: 'Ben'
      }
    };
    scope.$digest();
    expect(element.text().trim()).to.equal('Anonymous');
    expect(element.text()).to.not.contain('Ben');
  });

};
