angular.module("scrumApp",["ngRoute","ngAnimate","ngTouch"])
.config(function($routeProvider){
    $routeProvider.
    when("/histories",{
        templateUrl: "partials/scrum/histories",
        controller: historiesCtrl
        }).
    when('/history',{
        templateUrl: 'partials/scrum/history',
        controller: historyCtrl
    }).
    when('/sprint',{
        templateUrl: 'partials/scrum/sprint',
        controller: sprintCtrl
    }).
    when('/user',{
        templateUrl: 'partials/scrum/user',
        controller: userCtrl
    }).
    otherwise({
        redirectTo: '/sprint'   
    });
});