const gulp = require('gulp');
const del = require('del');
const minify = require('gulp-minify')
const cleanCss = require('gulp-clean-css');
let notify = require('gulp-notify');
let paths = ['src/**/*.js', 'src/**/*.css'];


let interceptErrors = function(error) {
  let args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


// first delete the dist folder
gulp.task('clean', () =>{
  del(['dist']);
  console.log('dist folder deleted');
});

gulp.task('compile', () => {
  gulp.src('src/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build'));

  gulp.src('src/**/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('build'));

  gulp.src("src/index.html")
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/'));
});



// compille into dist
// gulp.task('')

gulp.task('default', ['clean', 'compile']);
