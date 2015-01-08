/**
 * Created by Gezii on 2015/1/8.
 */

var dirModule = angular.module("DirModule", []);

//注册器加载完所有模块时，此方法执行一次
dirModule.run(function($templateCache){
    $templateCache.put('hello','hello.html');
});

dirModule.directive('hello', function($templateCache){
    return {
        restrict: 'AEMC',   //A属性、E元素、M注释、C样式类
        templateUrl: $templateCache.get('hello'),
        replace: true
    };
});

dirModule.directive('trans', function(){
    return {
        restrict: 'AE',   //A属性、E元素、M注释、C样式类
        transclude: true,
        template: '<div>Hello everyone!<div ng-transclude></div></div> '
    };
});