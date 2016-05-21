'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  gulp.src(['./src/jade/*.jade', './src/jade/preview/*.jade'])
    .pipe(jade({
      pretty: true,
      locals: {
        title: 'Kalendarz imprez'
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

gulp.task('images',function(){
    return gulp.src('./src/images/**/*.jpg', {base: './src'})
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js:watch', ['js'], function () {
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('bootstrap', function () {
  return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*', {base: './node_modules/bootstrap-sass/assets/'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js:watch', 'sass:watch', 'templates:watch','bootstrap','images']);
