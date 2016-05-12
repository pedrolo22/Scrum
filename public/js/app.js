'use strict';

angular.module('scrumApp',['ngRoute','ngTouch','ngAnimate','scrumControllers']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/Login', {
        templateUrl: '../views_home/login.html',
        controller: 'loginController'
      })
        .when('/Register', {
        templateUrl: '../views/register.html',
        controller: 'registerController'
      })
    .otherwise({
        redirectTo: '/Login'
    });
  }]);