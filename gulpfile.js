var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
    return gulp.src('./static/index.js').pipe(browserify()).pipe(gulp.dest('./static/browserify'));
});

gulp.task('watch', ['browserify'], function() {
    gulp.watch(['./*.js'], ['browserify']);
});
