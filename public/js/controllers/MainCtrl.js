

app.controller('MainController', ['$scope', function($scope,$location) {
    $scope.user = user;
    $scope.user.name = 'Anonymous'; //default value to be overridden
    console.log("OK");
    //view changer function
    $scope.go(path) {
        $location.path(path);
    };
    
    $scope.form = {};
    
}]);