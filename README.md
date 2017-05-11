### Angular 1项目

#### 环境搭建
不再利用generator-angular搭建，因为bower已不提倡使用，都使用npm来进行统一的包管理，手动搭建环境，写配置文件

工具 gulp+angular1

npm install jquery angular angular-ui-router angular-animate angular-local-storage angular-ui-bootstrap bootstrap-sass flat-ui font-awesome --save
npm install gulp gulp-load-plugins  browser-sync gulp-plumber gulp-autoprefixer gulp-sass gulp-sourcemaps gulp-useref gulp-if gulp-rev gulp-rev-replace gulp-csso gulp-inject gulp-clean gulp-uglify gulp-htmlmin  --save-dev

gulp-plumber   (捕获处理任务中的错误)
gulp-autoprefixer   (根据浏览器版本自动处理浏览器前缀)
gulp-sourcemaps   (生成便于开发调试的文件)
gulp-rev   (项目部署缓存解决方案，增加md5值)
gulp-rev-replace   (替换文件中已经增加MD5值的文件)
gulp-csso   (压缩css)
gulp-useref   (将html里面标注的地方合并成一个文件，但不负责压缩，即合并代码)
gulp-inject   (自动插入静态文件到html)
gulp-htmlmin  压缩html文件
编译scss，合并js/css，压缩js/css，加md5，注入index.html

bower/npm 都可以安装的库
图表使用： npm install chart.js angular-chart.js --save  


[图标库](http://fontawesome.dashgame.com/)
[falt-ui样式库](http://designmodo.github.io/Flat-UI/docs/components.html)

#### 代码书写规范
[angular 1 的代码书写规范](https://github.com/johnpapa/angular-styleguide/tree/master/a1)，
[ui-router 使用文档](https://ui-router.github.io)，
[ui-router 使用文档 WIKI](https://github.com/angular-ui/ui-router/wiki/URL-Routing)，
[ui-bootstrap 使用文档](https://angular-ui.github.io/bootstrap/#!#getting_started)，
[restangular使用文档 WIKI](https://github.com/mgonto/restangular)，
[angular-local-storage使用文档](https://github.com/grevory/angular-local-storage)
[chartjs文档](//http://jtblin.github.io/angular-chart.js/)
[momentjs 时间库](http://momentjs.cn/)
[angularjs本地存储cookie设置](https://github.com/grevory/angular-local-storage)

angular常用的技术
延迟加载， 懒加载, $ocLazyLoad

angular要实现loading效果 
angularjs作为一个全ajax的框架，对于请求，如果页面上不做任何操作的话，在结果返回来之前，页面是没有任何响应的，不像普通的HTTP请求，会有进度条之类


插件：
[log(toast)提示插件](https://github.com/CodeSeven/toastr)
tooltips插件


自定义上传的控件
angualrjs  input type=file 里面的ngchange不会有效果，需要点特殊的手段
还有设置post请求头 headers: {'Content-Type':undefined},这样浏览器不仅帮我们把Content-Type 设置为 multipart/form-data，还填充上当前的boundary,不能设置'Multipart/form-data'


### 后端环境

KOA vs EXPRESS
https://expressjs.com/
http://koajs.com/


### 开发环境搭建
npm install
gulp copy --> 手动更改sass目录 修改icon路径


问题： 绝对定位的元素bottom为0的时候会定位到屏幕底部，没有定位到文档的最底部

需要美化的控件   switch，radio，select，log提示插件，tooltips插件，上传插件




### 布局选择
一般多个相同的元素用ul li来布局

ul > li :not(:first-child){   //冒号前面不能有空格
    // > 表示仅选择ul的直接子元素li，不包括孙子li
    //这是选择除第一个li外的其他所有li
}
ul > * :not(:first-child) {
    // last-child表示最后一个元素
}
ul > li + li {
    // 选择除第一个li外的其他li， 相邻兄弟选择器，不会选择第一个列表项
}
ul > li:nth-child(1) {
    
}
