app.controller('MainController', ['$scope', function($scope) {
    $scope.user = user;
    $scope.user.name = 'Anonymous'; //default value to be overridden
    
    //view changer function
    $scope.changeView(view) {
        
    };
    
    $scope.form = {};
    
}]);