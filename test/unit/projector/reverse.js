'use strict';

module.exports = function () {
  
  var reverse;
  beforeEach(angular.mock.inject(function ($injector) {
    reverse = $injector.get('$filter')('reverse');
  }));

  it('can reverse an array', function () {
    expect(reverse([0, 1])).to.deep.equal([1, 0]);
  });

  it('is an identity for a non array', function () {
    expect(reverse('foo')).to.equal('foo');
  });

};