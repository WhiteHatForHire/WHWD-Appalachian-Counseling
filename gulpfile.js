var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlImport = require('gulp-html-import');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

 
gulp.task('import', function () {
    gulp.src('./views/index.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
    gulp.src('./views/about_me.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
    gulp.src('./views/about_you.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
    gulp.src('./views/nuts_bolts.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
    gulp.src('./views/therapy.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
    gulp.src('./views/contact.html')
        .pipe(htmlImport('./views/components/'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist')); 
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.html', ['import']);
});