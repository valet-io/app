module.exports = {
  frameworks: ['browserify', 'mocha', 'chai-sinon', 'env'],
  files: [
    './node_modules/angular/angular.js',
    './node_modules/angular-animate/angular-animate.js',
    'node_modules/angular-mocks/angular-mocks.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './components/firebase/firebase.js',
    './components/angularfire/angularfire.js',
    './components/ngFitText/src/ng-FitText.js',
    './src/**/*.html',
    'test/unit/index.js'
  ],
  preprocessors: {
    'test/unit/**/*.js': ['browserify'],
    '**/*.html': ['html2js']
  },
  reporters: ['progress', 'coverage'],
  browserify: {
    debug: true,
    transform: ['babelify', 'browserify-istanbul', 'browserify-shim']
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
  browsers: process.env.CI ? ['Firefox'] : ['PhantomJS'],
  singleRun: !!process.env.CI
};
