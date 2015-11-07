var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var jsSources = [
  'components/lib/*.js',
  'components/scripts/*.js'
];

var sassSources = [
  'components/sass/*.scss'
];

var coffeeSources = [
  'components/coffee/*.coffee'
];

gulp.task('js', function() {
  gulp.src(jsSources)
      .pipe(uglify())
      .pipe(concat('script.js'))
      .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
  gulp.src(sassSources)
    .pipe(sass({style: 'expanded', lineNumbers: true}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true  })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(coffeeSources, ['coffee']);
});

gulp.task('default', ['sass', 'coffee', 'js', 'watch']);
