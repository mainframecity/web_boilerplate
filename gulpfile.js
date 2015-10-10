var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var jsSources = [
  // Sources to be compiled go here.
];

gulp.task('js', function() {
  gulp.src(jsSources)
      .pipe(uglify())
      .pipe(concat('script.js'))
      .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['js', 'watch']);
