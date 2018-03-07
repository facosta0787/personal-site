const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

const PATH_HTML = 'src/*.html'
const PATH_SASS = './src/sass/**/*.sass'
const PATH_DIST = './'

gulp.task('htmlmin',function(){
  return gulp.src(PATH_HTML)
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest(PATH_DIST))
})

gulp.task('css',function(){
  return gulp.src(PATH_SASS)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(`${PATH_DIST}/css`))
})

gulp.task('css:sourcemaps',function(){
  return gulp.src(`${PATH_DIST}/css/**/*.css`)
  .pipe(sourcemaps.init())
  .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`${details.name} before: ${details.stats.originalSize}`);
    console.log(`${details.name} after: ${details.stats.minifiedSize}`);
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(`${PATH_DIST}/css`))
})

gulp.task('css:prod',function(){
  return gulp.src(PATH_SASS)
  .pipe(sass( {outputStyle: 'compressed'} ).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(`${PATH_DIST}/css`))
})

gulp.task('task:watch',function(){
  gulp.watch(PATH_SASS,['css'])
  gulp.watch(PATH_HTML,['htmlmin'])
})

gulp.task('default',['htmlmin','css'])

gulp.task('prod',['htmlmin','css:prod'])
