/**
 * Created by Gezii on 2015/3/9.
 */

var appRouter = angular.module('appRouter', ['ui.router']);
appRouter.config(function($stateProvider, $urlRouterProvider) {
    //
    $urlRouterProvider.otherwise("animate");
    //
    $stateProvider
        .state('angular', {
            url: "/angular",
            templateUrl: "html/angularjs/angular.html"
        })
        .state('animate', {
            url: "/animate",
            templateUrl: "html/animate/animate.html"
        })
        .state('echartMap', {
            url: "/map",
            templateUrl: "html/echarts/map.html"
        })
        .state('move', {
            url: "/move",
            templateUrl: "html/exercise/move.html"
        })
        .state('d3Tree', {
            url: "/d3Tree",
            templateUrl: "html/d3/d3Tree.html"
        })
        .state('jitTree', {
            url: "/jitTree",
            templateUrl: "html/jit/jitTree.html"
        })
    ;
});

appRouter.controller('PhoneListCtrl', ['$scope', '$http', function($scope,$http){
    $scope.phones1 = [
        {"name" : "Xiaomi",
            "snippet" : "为发烧而生！",
            "age" : 3},
        {"name" : "Meizu",
            "snippet" : "喜欢就好！",
            "age" : 5},
        {"name" : "Smartisan",
            "snippet" : "东半球最好的手机！",
            "age" : 2},
        {"name" : "Huwei",
            "snippet" : "华为！",
            "age" : 6},
        {"name" : "Apple",
            "snippet" : "呵呵！",
            "age" : 6}
    ];
    $scope.orderProp1 = "name";  //设置默认的排序为按name排序

    $scope.nums = [0,1,2,3,4,5,6,7];


    $http.get('./data/phones/phones.json').success(function(data){
        $scope.phones = data.splice(0, 5);
    });
    $scope.orderProp = "age";
}]);
