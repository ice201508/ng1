var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var bs = require('browser-sync').create();
var config = require('./gulp.config')();

gulp.task('clean', function(){
  return gulp.src('.tmp',{read: false})
            .pipe($.clean())
})

gulp.task('copy_css', function(){
  return gulp.src(config.css_source)
            .pipe(gulp.dest('app/scss/'))
})

gulp.task('copy_assets', function(){
  return gulp.src(config.font)
            .pipe(gulp.dest('app/assets/fonts/'))
})

gulp.task('copy_lib', function(){
  return gulp.src(config.lib)
            .pipe(gulp.dest('app/lib/'))
})

gulp.task('copy', ['copy_css', 'copy_assets', 'copy_lib'], function(){
  return;
})

gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.sass({outputStyle: 'nested'}))
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('.tmp/scss/'))
            //.pipe(bs.stream());
})


gulp.task('scss_min', function(){
  return gulp.src('app/scss/**/*.scss')
            .pipe($.plumber())
            .pipe($.sass({outputStyle: 'compressed'}))
            .pipe($.autoprefixer())
            .pipe(gulp.dest('.tmp/scss/'))
})

gulp.task('inject', function(){
  return gulp
      .src('app/index.html')
      //.pipe($.useref())
      .pipe($.inject(gulp.src(config.lib), {relative: true}))
      .pipe(gulp.dest('dist'));
})


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['scss'], function() {
    var options = {
      port: 8080,
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: false
       },
       ui: false,
      logLevel: "debug",
      logLevel: "info",
      logPrefix: "Angular 1 project",
      injectChanges: true,
      //logLevel: "silent"
    };
    options.server = {
      baseDir: [
          './app',
          '.tmp',
        ]
    }
    options.files = [
    ]
    bs.init(options);

    gulp.watch("app/scss/**/*.scss", ['scss']);
    gulp.watch(["app/**/*.html", "app/**/*.js"]).on('change', bs.reload);
});
