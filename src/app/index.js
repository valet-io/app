'use strict'; 

require('angular')
  .module('ProjectorApp', [])
  .controller('AppController', [
    require('./controller')
  ]);

module.exports = 'ProjectorApp';
