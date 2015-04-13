var CI = !!process.env.CI;
var COVER = !!process.env.COVER;

var pkg = require('./package.json');

var config = module.exports = {
  frameworks: ['browserify', 'mocha', 'chai-sinon', 'env'],
  files: [
    './node_modules/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'test/unit/index.js'
  ],
  preprocessors: {
    'test/unit/**/*.js': ['browserify']
  },
  reporters: ['progress'],
  browserify: {
    debug: true
  },
  coverageReporter: {
    reporters: [
      {type: 'html'},
      {type: 'text-summary'}
    ]
  },
  client: {
    env: {
      firebase__endpoint: 'https://valet-io-events-dev.firebaseio.com',
      valet__api: 'http://valet-io-pledge-dev.herokuapp.com'
    }
  },
  browsers: CI ? ['Firefox'] : ['PhantomJS'],
  singleRun: CI
};

if (COVER) {
  config.reporters.push('coverage');
  config.browserify.transform = [
    ['browserify-istanbul', {
      ignore: ['test/**/*.js', '**/*.html'],
      instrumenter: require('isparta')
    }]
  ];
}
