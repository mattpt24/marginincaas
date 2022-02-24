var gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  postcss = require('gulp-postcss'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  lineendingcorrector = require('gulp-line-ending-corrector');

gulp.task('css', () => {

  return gulp.src('build/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('tailwindcss'),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(lineendingcorrector())
    .pipe(gulp.dest('dist/css'));
})

gulp.task('js', () => {
return gulp.src('build/js/custom/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(lineendingcorrector())
  .pipe(gulp.dest('dist/js/custom'));
})

gulp.task('jsx', () => {
  return gulp.src('build/js/**/*.jsx')
    .pipe(babel({
      plugins: ['transform-react-jsx']
    }))
    .pipe(uglify())
    // .pipe(concat('app.js'))
    .pipe(lineendingcorrector())
    .pipe(gulp.dest('dist/js'));
})

gulp.task('copy', function () {
  return gulp.src('build/js/**/*.json')
      .pipe(gulp.dest('dist/js'));
});

gulp.task('js-vendor', () => {
  return gulp.src('build/js/vendor/**/*.js')
    .pipe(gulp.dest('dist/js'));
})

gulp.task('fonts', () => {
  return gulp.src('build/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
})

gulp.task('image', () => {
  return gulp.src('build/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/img'));
})



//Watch for scss changes
gulp.task('watch', function () {
  gulp.watch('build/scss/**/*.scss', gulp.series('css')); //[sass] references the task listed above
  gulp.watch('build/js/custom/**/*', gulp.series('js'));
  gulp.watch('build/js/vendor/**/*', gulp.series('js-vendor'));
  gulp.watch('build/img/**/*', gulp.series('image'));
  gulp.watch('build/js/custom/**/*.json', gulp.series('copy'));
});

gulp.task('build', gulp.series(['css', 'js', 'js-vendor', 'image', 'fonts', 'copy']));