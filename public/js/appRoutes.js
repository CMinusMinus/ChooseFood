// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        //homepage
        .when('/home', {
                console.log("I got here");
                templateUrl: 'views/home.html',
                controller: 'MainController'
        })
        //login
        .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'MainController'
        })
        //results
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsController'
        });

    $locationProvider.html5Mode(true);

}]);
