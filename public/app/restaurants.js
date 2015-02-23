app.factory('restaurants', ['$resource', function ($resource) {
    return $resource('/api/restaurants');
}]);