var fs = require('fs'), 
        gulp = require('gulp');

// to read all /gulp files into gulpfile
fs.readdirSync(__dirname + '/gulp').forEach (function (task){
  require('./gulp/'+task);
});

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);