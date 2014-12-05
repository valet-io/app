'use strict';

module.exports = function () {
  
  var round;
  beforeEach(angular.mock.inject(function ($injector) {
    round = $injector.get('$filter')('round');
  }));

  it('can round to the nearest int', function () {
    expect(round(1.2)).to.equal(1);
    expect(round(1.6)).to.equal(2);
  });

  it('can round down', function () {
    expect(round(1.2, 'down')).to.equal(1);
    expect(round(1.6, 'down')).to.equal(1);
  });

  it('can round up', function () {
    expect(round(1.2, 'up')).to.equal(2);
    expect(round(1.6, 'up')).to.equal(2);
  });

  it('can to a multiple', function () {
    expect(round(12, 10, 'down')).to.equal(10);
    expect(round(12, 10, 'up')).to.equal(20);
    expect(round(12, 10)).to.equal(10);
    expect(round(16, 10)).to.equal(20);
  });

  it('returns undefined for a non number', function () {
    expect(round('1.2')).to.be.undefined;
  });

};
