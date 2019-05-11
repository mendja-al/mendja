var gulp = require('gulp');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files input
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

gulp.task('sass', function () {
  return gulp.src('./public/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('cssMinify', function () {
  return gulp.src('css/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task("css", gulp.series("sass","cssMinify"));

gulp.task('default', gulp.parallel('css'));

gulp.task('watch', () => {
  return gulp.watch(['css/**/*.scss'], gulp.series("default"));
})