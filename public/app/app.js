app = angular.module('app',['ngResource']);

angular.module('app').controller('testController', ['$scope', '$resource', 'restaurants', function($scope, $resource, restaurants) {

    $scope.restaurants = $resource('/api/restaurants').query();
    
    $scope.submit = function () {
        
        restaurants.save({ name: $scope.name, description: $scope.description});
    }
    
}]);