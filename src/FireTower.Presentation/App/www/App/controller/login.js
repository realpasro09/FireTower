angular.module('firetower').controller('LoginController', ['$scope', '$timeout', '$location', 'userManagement', function ($scope, $timeout, $location, user) {
    $scope.logged = false;
    $scope.salutation = false;
    $scope.byebye = false;
    $scope.facebookReady = false;
    
    //FB.Event.subscribe('auth.login', function (response) {
    //    $scope.facebookReady = true;
    //    FB.getLoginStatus(function (response2) {
    //        if (response2.status == 'connected') {
    //            $scope.logged = true;
    //        }
    //    });
    //});

    ////$scope.login = function () {
    ////    FB.login(
    ////        function (response) {
    ////            if (response.status == 'connected') {
    ////                $scope.me();
    ////            } else {
    ////                $scope.login();
    ////            }
    ////        });
    ////};
    //$scope.me = function () {
    //    FB.api('/me', function (response) {
    //        $scope.$apply(function () {
    //            user.setUser(response);
    //        });

    //    });
    //};
    
    
    $scope.login = function () {
        alert("hola");
        var facebookConnect = window.plugins.facebookConnect;
        facebookConnect.login({ permissions: ["email", "user_about_me"], appId: "1480485962163246" }, function (result) {
            console.log("FacebookConnect.login:" + JSON.stringify(result));
            alert("iniio");
        });
    };
}]);