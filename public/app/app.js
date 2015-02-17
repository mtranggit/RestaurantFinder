angular.module('app',[]);

angular.module('app').controller('testController', ['$scope', function($scope) {
    $scope.restaurants = [
        {
            name : 'Steak on the Rock',
            description : 'Yummy steak with full flavor cooked on the rock',
            suburb: 'Canley Heights'
        },
        {
            name : 'Phu Quoc',
            description : 'Top Vietnamese restaurant for a small price',
            suburb: 'Cabrammatta'
        },
        {
            name : 'TJ Kitchen',
            description : 'Yummy Thai',
            suburb: 'Surry Hills'
        }
    ];
}]);