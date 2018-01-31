var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlImport = require('gulp-html-import');

 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

 
gulp.task('import', function () {
    gulp.src('./views/index.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(gulp.dest('dist')); 
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.html', ['import']);
});