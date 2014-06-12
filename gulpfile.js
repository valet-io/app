'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});
