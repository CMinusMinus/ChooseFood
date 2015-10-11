// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            if () {
            templateUrl: 'views/home.html',
            controller: 'MainController'
            }
            else {
                templateUrl: 'views/login.html'
                controller: 'MainController'
            }
        })

        // nerds page that will use the NerdController
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsController'
        });

    $locationProvider.html5Mode(true);

}]);
