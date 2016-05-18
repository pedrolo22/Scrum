'use strict';

angular.module('labIS')
.controller('MainCtrl', function ($scope, $http) {
    
     $scope.login = function(nick, pssw){
         
        $http.get('/login' + nick + "&" + , $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
     };
    
});