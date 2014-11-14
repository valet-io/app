'use strict';

beforeEach(function () {
  angular.mock.module(require('../../'));
});
afterEach(function () {
  angular.mock.inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});

describe('App', function () {
  describe('Controller', require('./app/controller'));
});
describe('Campaign', function () {
  describe('States', require('./campaign/states'));
});
