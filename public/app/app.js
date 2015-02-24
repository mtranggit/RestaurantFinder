app = angular.module('app',['ngResource']);

angular.module('app').controller('testController', ['$scope', '$resource', 'restaurants', function($scope, $resource, restaurants) {

    var getRestaurants = function () {
        return $resource('/api/restaurants').query();
    }
    
    $scope.restaurants = getRestaurants();
    
    $scope.submit = function () {
        
        restaurants.save({ name: $scope.name, description: $scope.description});
        $scope.restaurants = getRestaurants();
    }
    
    
    
}]);