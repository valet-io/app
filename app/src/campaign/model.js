'use strict';

module.exports = function (BaseModel) {
  var Campaign = BaseModel
    .extend({
      objectName: 'campaigns'
    });

  return Campaign;
};
