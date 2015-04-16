var gulp = require('gulp'),
        less = require('gulp-less');

gulp.task('css', function (){
  gulp.src('css/**/app.less')
          .pipe(less())
          .pipe(gulp.dest('assets'));
  
});

gulp.task('watch:css', function (){
  gulp.watch('css/**/*.styl', ['css']);
});

