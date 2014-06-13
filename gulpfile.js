'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var connect    = require('connect');
var nconf      = require('nconf');
var internals  = {};

nconf
  .env('_')
  .argv()
  .defaults({
    server: {
      hostname: '0.0.0.0',
      port: 8080
    }
  });

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('bundle', function () {
  return browserify('./app/src/app/index.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('vendor', function () {
  return gulp.src([
    'components/angular/angular.js'
  ])
  .pipe(plugins.concat('vendor.js'))
  .pipe(gulp.dest('build/scripts'));
});

gulp.task('serve', function () {
  var handler = connect()
    .use(connect.logger('dev'))
    .use(require('connect-modrewrite')([
      '!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]'
    ]))
    .use(connect.static('build'))
    .listen(nconf.get('server:port'), function () {
      plugins.util.log('Listening at http://' + nconf.get('server:hostname') + ':' + nconf.get('server:port'));
    });
});
