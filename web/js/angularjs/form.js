/**
 * Created by Gezii on 2015/1/8.
 */


var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',function($scope){
    var defaultData = {
        email: '12324354@qq.com',
        password: '23435435',
        autoLogin: true
    };
    $scope.userInfo = defaultData;
    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData = function(){
        $scope.userInfo = {
            email: '56463242@qq.com',
            password: '68dgfdfgs',
            autoLogin: false
        }
    };
    $scope.resetFormData = function(){
        $scope.userInfo = defaultData;
    };
}]);
