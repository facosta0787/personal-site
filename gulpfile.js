const gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')

const PATH_HTML = 'src/*.html'
const PATH_SASS = './src/sass/**/*.sass'
const PATH_DIST = './'

gulp.task('htmlmin',function(){
  return gulp.src(PATH_HTML)
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest(PATH_DIST))
})


gulp.task('default',['htmlmin'])
