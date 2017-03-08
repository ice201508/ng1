### Angular 1项目

#### 环境搭建
不再利用generator-angular搭建，因为bower已不提倡使用，都使用npm来进行统一的包管理，手动搭建环境，写配置文件

工具 gulp+angular1

npm install jquery angular angular-ui-router angular-animate angular-ui-bootstrap bootstrap-sass flat-ui font-awesome --save
npm install gulp gulp-load-plugins  browser-sync gulp-plumber gulp-autoprefixer gulp-sass gulp-sourcemaps gulp-useref gulp-if gulp-rev gulp-rev-replace gulp-csso gulp-inject gulp-clean gulp-uglify  --save-dev

gulp-plumber   (捕获处理任务中的错误)
gulp-autoprefixer   (根据浏览器版本自动处理浏览器前缀)
gulp-sourcemaps   (生成便于开发调试的文件)
gulp-rev   (项目部署缓存解决方案，增加md5值)
gulp-rev-replace   (替换文件中已经增加MD5值的文件)
gulp-csso   (压缩css)
gulp-useref   (将html里面标注的地方合并成一个文件，但不负责压缩，即合并代码)
gulp-inject   (自动插入静态文件到html)

编译scss，合并js/css，压缩js/css，加md5，注入index.html


[图标库](http://fontawesome.dashgame.com/)
[falt-ui样式库](http://designmodo.github.io/Flat-UI/docs/components.html)

#### 代码书写规范
[angular 1 的代码书写规范](https://github.com/johnpapa/angular-styleguide/tree/master/a1)
[ui-router 使用文档](https://ui-router.github.io)
[ui-bootstrap 使用文档](https://angular-ui.github.io/bootstrap/#!#getting_started)



angular常用的技术
延迟加载， 懒加载

angular要实现loading效果
angularjs作为一个全ajax的框架，对于请求，如果页面上不做任何操作的话，在结果烦回来之前，页面是没有任何响应的，不像普通的HTTP请求，会有进度条之类
