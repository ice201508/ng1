var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var bs = require('browser-sync').create();
var config = require('./gulp.config')();

gulp.task('clean', function(){
  return gulp.src(['.tmp', 'dist'],{read: false})
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
})

gulp.task('scss_min', function(){
  return gulp.src(config.scss_min)
            .pipe($.plumber())
            .pipe($.sass({outputStyle: 'compressed'}))
            .pipe($.autoprefixer())
            .pipe(gulp.dest('.tmp/scss/'))
})

gulp.task('copy_assets_dist', function(){
  return gulp.src(config.font)
            .pipe(gulp.dest('dist/assets/fonts/'))
})
gulp.task('copy_image_dist', function(){
  return gulp.src(config.image)
            .pipe(gulp.dest('dist/assets/images/'))
})
gulp.task('copy_favicon_dist', function(){
  return gulp.src('app/favicon.ico')
            .pipe(gulp.dest('dist'))
})
gulp.task('copy_html', function(){
    var options = {
        removeComments: true,  //清除html注释
        collapseWhitespace: true, //压缩html
        minifyJS: true, //压缩页面js
        minifyCSS: true, //压缩页面css
    }
    return gulp.src(config.html, {base: 'app'})
            .pipe($.htmlmin(options))
            .pipe(gulp.dest('dist'))
})

gulp.task('build', ['scss_min', 'copy_assets_dist', 'copy_image_dist', 'copy_html', 'copy_favicon_dist'], function(){
  return gulp
      .src('app/index.html')
      .pipe($.useref())
      .pipe($.if('*.js', $.uglify()))
      .pipe($.if('script/app.js', $.rev()))
      .pipe($.if('*.css', $.csso()))
      .pipe($.if('*scss/custom.css', $.rev()))
      .pipe($.revReplace())
      .pipe(gulp.dest('dist'))
})


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['scss'], function() {
    gulp.watch("app/scss/**/*.scss", ['scss']);

    var options = {
      port: 9001,
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
        "./app/**/*.html",
        "./app/**/*.js",
        ".tmp/scss/**/*.css"
    ]
    bs.init(options);
});
