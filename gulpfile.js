const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


function watch_files(){
  gulp.watch('./assets/css/**/*.scss', css);
}

function css(done){
  const plugins = [autoprefixer({overrideBrowserslist: ['last 2 versions'], grid: true , add: true })];
  gulp.src('./assets/css/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
            errorLogConsole: true,
            outputStyle: 'compressed'
       }))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./assets/css'))
      done();
}

gulp.task('css', css);

gulp.task('default', gulp.parallel(css));

gulp.task('watch', gulp.series(watch_files));


