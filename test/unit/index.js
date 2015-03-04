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
  describe('Controllers', require('./campaign/controllers'));
});
describe('Projector', function () {
  describe('States', require('./projector/states'));
  describe('Controllers', require('./projector/controllers'));
  describe('Utilities', function () {
    describe('filter: reverse', require('./projector/reverse'));
    describe('directive: donor', require('./projector/donor'));
    describe('directive: domain', require('./projector/domain'));
  });
});
