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
tasks.use('bundle', './src/index.js', './build/scripts', {});
tasks.use('index', './src/index.html', './build');
tasks.use('server', void 0, void 0, {
  localEnv: {
    'firebase__endpoint': 'https://valet-io-events-dev.firebaseio.com',
    'valet__api': 'http://valet-io-pledge-dev.herokuapp.com',
    'sentry__dsn': 'https://0759fbf95a4d40019f9451e963351d18@app.getsentry.com/38955'
  }
});
tasks.use('watch', {
  './src/**/views/*.html': 'templates',
  './src/index.html': 'index',
  './styles/**/*.scss': 'styles',
  './src/index.js': 'bundle',
  './images/**/*': 'images'
}, void 0,
{
  build: './build',
  prerequisites: ['templates', 'styles', 'index', 'images']
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

gulp.task('images', function () {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('build', ['clean'], function (done) {
  sequence(['bundle', 'templates', 'styles', 'images'], 'index', done);
});

gulp.task('serve', ['watch', 'server']);
