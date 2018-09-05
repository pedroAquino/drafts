var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {});

gulp.task('minify-css', function() {
    return gulp.src('src/styles/site.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
});