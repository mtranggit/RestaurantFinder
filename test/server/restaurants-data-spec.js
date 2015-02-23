var expect = require("chai").expect;
var mongoose = require("mongoose");
var restaurantModel = require('../../models/Restaurant');
var Promise = require("bluebird");
var restaurantsData = require("../../restaurants-data");

function resetRestaurants() {
    return new Promise( function (resolve, reject) {
        mongoose.connection.collections['restaurants'].drop(resolve, reject);
    });
}


describe("Get restaurants", function () {
    
    var restaurants;
    
    function saveTestRestaurant(restaurant) {
        return restaurantsData.saveRestaurant(restaurant);
    }
    
    before(function (done) {
        restaurantsData.connectDB('mongodb://localhost/restaurantfinder')
            .then(resetRestaurants)
            .then(restaurantsData.seedRestaurants)
            .then(restaurantsData.findRestaurants)
            .then(function (restaurantsList) {
                restaurants = restaurantsList;
                done();
            });
    });
    
    after(function () {
       mongoose.connection.close(); 
    });
    
    it("should not be empty since restaurants are seeded", function () {  
        expect(restaurants.length).to.be.at.least(1);
    });
    
    it("restaurant name should not be empty", function () {
       expect(restaurants[0].name).not.to.be.empty;
    });
    
    it("restaurant description should not be empty", function () {
       expect(restaurants[0].description).not.to.be.empty;
    });
});


describe("DB save restaurants", function () {
    
    var restaurant = {name: 'Tan Viet', description: 'A place to dine for Mi Viet Tiem'};
    var restaurants;
    
    function saveTestRestaurant(restaurant) {
        return restaurantsData.saveRestaurant(restaurant);
    }
    
    before(function (done) {
        restaurantsData.connectDB('mongodb://localhost/restaurantfinder')
            .then(resetRestaurants)
            .then(function () { return restaurantsData.saveRestaurant(restaurant)})
            .then(restaurantsData.findRestaurants)
            .then(function (restaurantsList) {
                restaurants = restaurantsList;
                done();
            });
    });
    
    after(function () {
       mongoose.connection.close(); 
    });


    it("should have one restaurant after saving one restaurant", function () {
       expect(restaurants).to.have.length(1);
    });
});