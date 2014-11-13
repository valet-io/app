'use strict';

'use strict';

var gulp     = require('gulp');
var gutil    = require('gulp-util');
var _        = require('lodash');
var tasks    = require('bd-gulp-tasks');
var karma    = require('karma-as-promised');
var sequence = require('run-sequence');

gutil.log('Environment:', gutil.colors.cyan(tasks.env.env));

tasks.use('lint', ['./src/**/*.js', './test/**/*.js', './gulpfile.js']);
tasks.use('clean', 'build');
tasks.use('templates', './src/**/views/*.html', 'build/views');
tasks.use('styles', './styles/main.scss', './build/styles');
tasks.use('vendor', [
  './node_modules/angular/angular.js',
  './node_modules/angular-ui-router/release/angular-ui-router.js',
  './components/firebase/firebase.js',
  './components/angularfire/angularfire.js',
  './components/ngFitText/ng-FitText.js'
], './build/scripts');
tasks.use('bundle', './src/index.js', './build/scripts', {
  templates: './src/**/views/*.html',
  module: 'ValetApp'
});
tasks.use('index', './src/index.html', './build');
tasks.use('server', void 0, void 0, {
  localEnv: {
    'firebase__endpoint': 'https://valet-io-events-dev.firebaseio.com',
    'valet__api': 'http://valet-io-pledge-dev.herokuapp.com'
  }
});
tasks.use('watch', {
  './src/**/views/*.html': 'templates',
  './src/index.html': 'index',
  './styles/**/*.scss': 'styles',
  './src/index.js': 'bundle'
}, void 0,
{
  build: './build',
  prerequisites: ['templates', 'styles', 'vendor', 'index']
});

gulp.task('unit', function () {
  var base = require('./karma');
  return karma.server.start(_.extend({}, base, gutil.env.sauce && require('./karma.js')))
    .then(function () {
      process.exit(0);
    })
    .catch(function () {
      process.exit(1);
    });
});

gulp.task('build', ['clean'], function (done) {
  sequence(['bundle', 'vendor', 'templates', 'styles', 'fonts', 'images'], 'index', done);
});

gulp.task('serve', ['watch', 'server']);
