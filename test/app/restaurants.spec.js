describe("posting restaurants", function () {
    
    var postRequestRestaurant;
    
    var newRestaurant = { name: 'Test Restaurant', description: 'Test Description'};
    
    beforeEach(module('app'));
    
    it("should call /api/restaurants with restaurant data", inject(function ($httpBackend, restaurants) {
        $httpBackend.whenPOST('/api/restaurants', function (data) {
            postRequestRestaurant = JSON.parse(data);
            expect(postRequestRestaurant).to.not.be.empty;
            return true;
        }).respond(200);
        restaurants.save(newRestaurant);
        $httpBackend.flush();
    }));
})