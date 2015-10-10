
angular.module('RestaurantService', []).factory('Restaurant', ['$http', function($http) {

    return {
        // call to get all restaurants
        get : function() {
            return $http.get('restaurants');
        },

        // call to POST and create a new restaurant
        create : function(restaurantData) {
            return $http.post('restaurants', nerdData);
        },

        // call to DELETE a restaurant
        delete : function(id) {
            return $http.delete('restaurant' + id);
        }
    }       

}]);
