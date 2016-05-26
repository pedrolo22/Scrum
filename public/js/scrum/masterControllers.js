function newSprintMasterCtrl($scope){
    //peticion newSprint
    $scope.newSprintT = {};
    $scope.fail = false;

    $scope.newSprint = function(){
        $scope.fail = false;
        $http.post('/newSprint',$scope.newSprintT)
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
               //Mostrar resultados
            }
                
        });
    }
}

function pendingHistoriesCtrl($scope){
    //peticion historias de usuario pendientes
    $scope.fail = false;

    $scope.pendingHistories = function(){
        $scope.fail = false;
        $http.post('/pendingHistories')
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
               //Mostrar resultados
            }
                
        });
    }
}