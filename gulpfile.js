const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');



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

//script paths
function js(done){
 var jsFiles = './assets/js/*.js',
    jsDest = './assets/js';

    gulp.src(jsFiles)
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest(jsDest))
        done();
}

gulp.task('css', css);
gulp.task('js', js);

gulp.task('default', gulp.parallel(css));

gulp.task('watch', gulp.series(watch_files));



