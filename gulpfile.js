'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var connect    = require('connect');
var nconf      = require('nconf');
var watchify   = require('watchify');
var sequence   = require('run-sequence');
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

var paths = {
  src: './app/src/**/*.js',
  main: './app/src/index.js',
  index: './app/index.html',
  test: './test/**/*.js',
  styles: './app/styles/main.sass',
  build: './build'
};

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', paths.src, paths.test])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

internals.bundle = function (bundler) {
  return bundler
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.build + '/scripts'));
};

gulp.task('bundle', function () {
  return internals.bundle(browserify(paths.main));
});

gulp.task('vendor', function () {
  return gulp.src([
    'components/angular/angular.js'
  ])
  .pipe(plugins.concat('vendor.js'))
  .pipe(gulp.dest(paths.build + '/scripts'));
});

gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', ['index', 'vendor'], function () {
  var bundler = watchify(paths.main);
  bundler.on('update', internals.bundle.bind(null, bundler));

  gulp.watch(paths.index, ['index']);

  plugins.livereload.listen();
  gulp.watch(paths.build + '/**/*', plugins.livereload.changed);

  return internals.bundle(bundler);
});

gulp.task('serve', function () {
  connect()
    .use(connect.logger('dev'))
    .use(require('connect-modrewrite')([
      '!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]'
    ]))
    .use(connect.static('build'))
    .listen(nconf.get('server:port'), function () {
      plugins.util.log('Listening at http://' + nconf.get('server:hostname') + ':' + nconf.get('server:port'));
    });
});
