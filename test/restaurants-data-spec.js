var expect = require("chai").expect;
var mongoose = require("mongoose");
var restaurantModel = require('../models/Restaurant');
var Promise = require("bluebird");
var restaurantsData = require("../restaurants-data");

// function resetJobs(callback) {
//     mongoose.connection.collections['restaurants'].drop(callback);
// }

function resetRestaurants() {
    return new Promise( function (resolve, reject) {
        mongoose.connection.collections['restaurants'].drop(resolve, reject);
    });
}

// var connectDB = Promise.promisify(mongoose.connect, mongoose);

// function findRestaurants(query) {
//     return Promise.cast(mongoose.model('Restaurant').find(query).exec());
// }

describe("Get restaurants", function () {
    
    var restaurants;
    
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
    
    //it("should not be empty since restaurants are seeded", function (done) {
        //mongoose.connect('mongodb://localhost/restaurantfinder', function () {
        
            
            // resetRestaurants().then(function () {
            //     restaurantModel.seedRestaurants().then( function () {
            //         mongoose.model('Restaurant').find({}).exec(function (error, restaurantsList) {
            //             expect(restaurantsList.length).to.be.at.least(1);
            //             done();
            //         });
            //     });
            // });
            
        // connectDB('mongodb://localhost/restaurantfinder')
        //     .then(resetRestaurants)
        //     .then(restaurantModel.seedRestaurants)
        //     .then(findRestaurants)
        //     .then(function (restaurantsList) {
        //         expect(restaurantsList.length).to.be.at.least(1);
        //         done();
        //     });
    //});

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

