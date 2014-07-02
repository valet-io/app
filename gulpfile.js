'use strict';

var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var superstatic = require('superstatic');
var watchify    = require('watchify');
var sequence    = require('run-sequence');
var internals   = {};

var paths = {
  src: './src/**/*.js',
  main: './src/index.js',
  index: './index.html',
  templates: './src/**/*.html',
  test: './test/**/*.js',
  styles: './styles/main.scss',
  build: './build'
};

var isEnv = function () {
  return Array.prototype.slice.call(arguments, 0)
    .filter(function (e) {
      return plugins.util.env[e];
    })
    .length;
};

var env = Object.keys(plugins.util.env)
  .filter(function (flag) {
    return ['development', 'staging', 'production'].indexOf(flag) !== -1;
  })[0];

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', paths.src, paths.test])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

internals.bundle = function (bundler) {
  return bundler
    .transform(require('envify/custom')({
      NODE_ENV: env
    }))
    .transform('browserify-shim')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.build + '/scripts'));
};

gulp.task('bundle', function () {
  return internals.bundle(browserify(paths.main));
});

gulp.task('vendor', function () {
  return gulp.src([
    './components/angular/angular.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './components/firebase/firebase.js',
    './components/angularfire/angularfire.js'
  ])
  .pipe(plugins.concat('vendor.js'))
  .pipe(gulp.dest(paths.build + '/scripts'));
});

gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulp.dest(paths.build));
});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(gulp.dest(paths.build + '/views'));
});

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(plugins.sass())
    .pipe(gulp.dest(paths.build + '/styles'));
});

gulp.task('watch', ['index', 'vendor', 'styles', 'templates'], function () {
  var bundler = watchify(paths.main);
  bundler.on('update', internals.bundle.bind(null, bundler));

  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);

  plugins.livereload.listen();
  gulp.watch(paths.build + '/**/*', plugins.livereload.changed);

  return internals.bundle(bundler);
});

gulp.task('serve', ['watch'], function (done) {
  superstatic().listen(8000, done);
});

gulp.task('build', ['bundle', 'vendor', 'styles', 'templates', 'index'])
