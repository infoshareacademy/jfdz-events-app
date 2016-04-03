'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var Eyeglass = require("eyeglass").Eyeglass;

var eyeglass = new Eyeglass({
  // ... node-sass options
  importer: function(uri, prev, done) {
    done(sass.compiler.types.NULL);
  }
});

gulp.task('templates', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        title: 'My website'
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('templates:watch', ['templates'], function () {
  gulp.watch('./src/jade/**/*.jade', ['templates']);
});

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js', {base: './src'})
    .pipe(gulp.dest('./dist/'));
});
gulp.task('js:watch', ['js'], function () {
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*')
    .pipe(sourcemaps.init())
    .pipe(sass(eyeglass.sassOptions()).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js:watch', 'sass:watch', 'templates:watch']);
