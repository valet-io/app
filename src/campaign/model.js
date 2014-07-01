'use strict';

var Firebase = require('Firebase');

module.exports = function (BaseModel, $firebase, $q, config) {
  var Campaign = BaseModel
    .extend({
      objectName: 'campaigns',
      total: function () {
        var f = this.firebase;
        if (!f.aggregates || !f.options) return 0;
        return this.firebase.aggregates.total + this.firebase.options.startingValue;
      },
      listen: function () {
        var self = this;
        var deferred = $q.defer();
        this.firebase = $firebase(new Firebase(config.firebase.endpoint + '/campaigns/' + this.id));
        this.firebase.$on('loaded', function () {
          deferred.resolve(self);
        });
        return deferred.promise;
      }
    });

  return Campaign;
};
