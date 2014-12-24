/**
 * Created by Gezii on 2014/12/24.
 */
function PhoneListCtrl($scope){
    $scope.phones = [
        {"name" : "Xiaomi",
         "snippet" : "Xiaomi 为发烧而生！"},
        {"name" : "Meizu",
            "snippet" : "Meizu 喜欢就好！"},
        {"name" : "Chuizi",
            "snippet" : "Chuizi 东半球最好的手机！"},
        {"name" : "Huwei",
            "snippet" : "Huwei 华为！"}
    ];

    $scope.nums = [0,1,2,3,4,5,6,7];
}