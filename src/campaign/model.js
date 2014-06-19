'use strict';

var Firebase = require('Firebase');

module.exports = function (BaseModel, $firebase, $q) {
  var Campaign = BaseModel
    .extend({
      objectName: 'campaigns',
      listen: function () {
        var deferred = $q.defer();
        this.firebase = $firebase(new Firebase('https://valet-io-events.firebaseio.com/campaigns/' + this.id));
        this.firebase.$on('loaded', function () {
          deferred.resolve(this);
        });
        return deferred.promise;
      }
    });

  return Campaign;
};
