 // 这里只做一件事  把angular 定义为 具体的模块 并实例化  返回
define(['angular','uiRouter','angularCSS'],function(angular){
    var app = angular.module('myapp',['ui.router','angularCSS']);
    return app;
});





