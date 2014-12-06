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

/* istanbul ignore next */
if (env.sentry__dsn) {
  module.exports.sentry = {
    dsn: env.sentry__dsn
  };
} 
