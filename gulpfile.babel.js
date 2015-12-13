import gulp from 'gulp';
import lazypipe from 'lazypipe';
import plumber from 'gulp-plumber';

import jade from 'gulp-jade';
import stylus from 'gulp-stylus';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';

import minifyCss from 'gulp-minify-css';
import uglify from 'gulp-uglify';

const htmlTasks = lazypipe()
  .pipe(jade, {
    pretty: true,
    basedir: './src',
  });

const cssTasks = lazypipe()
  .pipe(stylus)
  .pipe(minifyCss);

const jsTasks = lazypipe()
  .pipe(babel, {
    presets: ["es2015"]
  })
  .pipe(uglify);

const imgTasks = lazypipe()
  .pipe(imagemin, {
    progressive: true,
  });

gulp.task('html', () => {
  return gulp.src(['./src/**/*.jade', '!./src/**/_*.jade'])
    .pipe(plumber())
    .pipe(htmlTasks())
    .pipe(gulp.dest('./build'));
});

gulp.task('css', () => {
  return gulp.src('./src/css/styles.styl')
    .pipe(plumber())
    .pipe(cssTasks())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', () => {
  return gulp.src('./src/js/scripts.js')
    .pipe(plumber())
    .pipe(jsTasks())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('img', () => {
  return gulp.src('./src/img/*')
    .pipe(plumber())
    .pipe(imgTasks())
    .pipe(gulp.dest('./build/img'));
});

gulp.task('copy', () => {
  return gulp.src(['./src/CNAME', './src/README.md'])
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['html', 'css', 'js', 'img', 'copy'], () => {
});

gulp.task('dev', ['default'], () => {
  gulp.watch('./src/**/*.jade', ['html']);
  gulp.watch('./src/css/styles.styl', ['css']);
  gulp.watch('./src/js/scripts.js', ['js']);
});
