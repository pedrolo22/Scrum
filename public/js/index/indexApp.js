angular.module("scrumApp",["ngRoute","ngAnimate","ngTouch"])
.config(function($routeProvider){
    $routeProvider.
    when('/login',{
         templateUrl: 'partials/index/login',
         controller: loginCtrl
        }).
    when('/register',{
        templateUrl: 'partials/index/register',
        controller: registerCtrl
    }).
    otherwise({
        redirectTo: '/'
    });
});