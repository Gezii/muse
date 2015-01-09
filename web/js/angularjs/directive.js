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
        scope: {},          //独立指令，与其他的hello指令相互区别开
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

dirModule.controller('DirCtrl1', ['$scope', function($scope){
    $scope.loadData1 = function(){
        console.log("加载数据中1。。。");
    };
    $scope.ctrlFlavor = '百威';
    $scope.sayHello = function(name){
        alert('Hello ' + name);
    }
}]);

dirModule.controller('DirCtrl2', ['$scope', function($scope){
    $scope.loadData2 = function(){
        console.log("加载数据中2。。。");
    }
}]);

dirModule.directive('loader', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attr){
            element.bind('mouseenter',function(){
//                scope.loadData();
//                scope.$apply("loadData1()");
                //howToLoad会被转换成小写的howtoload
                scope.$apply(attr.howtoload);
            })
        }
    }
});


dirModule.directive('drink', function(){
    return {
        restrict: 'AE',
        scope: {
//            flavor: '@'   //字符串传递
            flavor: '='     //双向绑定
        },
        template: "<input type='text' ng-model='flavor' class='form-control'/>"
//        ,
//        link: function(scope, element, attrs){
//            scope.flavor = attrs.flavor;
//        }
    }
});

dirModule.directive('greeting', function(){
    return {
        restrict: 'AE',
        scope: {
//            flavor: '@'
//            flavor: '='     //双向绑定
            greet: '&'       //传递一个来自父scope的函数，稍后调用
        },
        template: "<div class='col-md-9'><input type='text' ng-model='userName' class='form-control'/></div>"+
                  "<div class='col-md-3'><button class='btn btn-default' ng-click='greet({name:userName})'>Greet</button></div>"

    }
});