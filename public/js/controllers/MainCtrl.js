app.controller('MainController', ['$scope', function($scope) {
    $scope.user = user;
    $scope.user.name = 'Anonymous'; //default value to be overridden
    
    $scope.form = {};
    
}]);