'use strict';

var Firebase = require('Firebase');

module.exports = function (BaseModel, $firebase, $q) {
  var Campaign = BaseModel
    .extend({
      objectName: 'campaigns',
      total: function () {
        return this.firebase.aggregates.total + this.firebase.options.startingValue;
      },
      listen: function () {
        var self = this;
        var deferred = $q.defer();
        this.firebase = $firebase(new Firebase('https://valet-io-events.firebaseio.com/campaigns/' + this.id));
        this.firebase.$on('loaded', function () {
          deferred.resolve(self);
        });
        return deferred.promise;
      }
    });

  return Campaign;
};
