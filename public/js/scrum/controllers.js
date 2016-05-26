function historiesCtrl($scope){
    //Petición historias de usuario completadas
    $scope.fail = false;
    $scope.getHistories = function(){
        $scope.fail = false;
        $http.post('/histories')
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
                //Mostrar resultados
            }
                
        });
}
function historyCtrl($scope){
    //Petición de historias de usuarios asignadas a más de un Sprint
    $scope.getHistory = function(){
        $scope.fail = false;
        $http.post('/history')
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
                //Mostrar resultados
            }
                
        });
}
function sprintCtrl($scope){
    //Petición historias de usuario del Sprint activo
    $scope.fail = false;
    $scope.getSprint = function(sprintId){
        $scope.fail = false;
        $http.post('/sprint/' + sprintId)
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
                //Mostrar resultados
            }
                
        });
    }}
function userCtrl($scope){
    //Petición de historias de usuario asignadas a un desarrollador
    $scope.fail = false;
    $scope.getUser = function(userId){
        $scope.fail = false;
        $http.post('/user/' + userId)
        .success(function(response){
            if(response.code == 1){
                $scope.fail = true;
            }else if(response.code == 0){
                //Mostrar resultados
            }
                
        });
}