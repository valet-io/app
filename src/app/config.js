'use strict';

var env = require('env');

module.exports = {
  firebase: {
    endpoint: env.firebase__endpoint
  },
  valet: {
    api: env.valet__api
  }
};
