angular.module('app',['ngResource']);

angular.module('app').controller('testController', ['$scope', '$resource', function($scope, $resource) {

    $scope.restaurants = $resource('/api/restaurants').query();
    
}]);