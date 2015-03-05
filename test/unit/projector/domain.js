'use strict';

module.exports = function () {
  
  var live, scope, element;
  beforeEach(angular.mock.inject(function ($injector) {
    live    = $injector.get('live');
    scope   = $injector.get('$rootScope').$new();
    element = $injector.get('$compile')('<domain name="name" />')(scope);
  }));

  it('displays the normal domain in live mode', function () {
    scope.name = 'myhost.org';
    scope.$digest();
    expect(element.text().trim()).to.equal('myhost.org');
  });

  it('prepends "test." in test mode', function () {
    scope.name = 'myhost.org';
    live.enabled(false);
    scope.$digest();
    expect(element.text().trim()).to.equal('test.myhost.org');
  });

};
