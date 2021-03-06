gulp = require 'gulp'
sass = require 'gulp-sass'
rename = require 'gulp-rename'
browserify = require 'browserify'
streamify = require 'gulp-streamify'
browserSync = require 'browser-sync'
source = require 'vinyl-source-stream'
sourcemaps = require 'gulp-sourcemaps'
uglify = require 'gulp-uglify'

gulp.task 'default', ['build']

gulp.task 'build', ['js', 'css']

gulp.task 'watch', ['build', 'server'], ->
  gulp.watch 'public/index.html', ['reload']
  gulp.watch 'src/js/*', ['js', 'reload']
  gulp.watch 'src/css/*', ['css', 'reload']

gulp.task 'js', ->
  browserify
    entries: ['./src/js/index.coffee']
    extensions: ['.coffee']
    debug: true
  .bundle()
  .pipe source 'mocho.js'
  .pipe streamify uglify()
  .pipe gulp.dest './public'

gulp.task 'css', ->
  gulp.src './src/css/index.scss'
  .pipe sass()
  .pipe rename 'mocho.css'
  .pipe gulp.dest './public'

gulp.task 'server', ->
  browserSync
    server:
      baseDir: './public'
    open: false

gulp.task 'reload', ->
  browserSync.reload()
