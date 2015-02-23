var expect = require("chai").expect;
var request = require("supertest");
var Promise = require("bluebird");
var express = require("express");
var app = express();


var dataSavedRestaurant;

var db = {
    findRestaurants: function() {
        return new Promise(function (resolve, reject) {
            resolve(['hello']);
        });
    },
    saveRestaurant: function(restaurant) {
        dataSavedRestaurant = restaurant;
    }
}
var restaurantService = require("../../restaurants-service")(db, app);

describe("get restaurants", function () {
    it("should return a json list of restaurants", function (done) {
        request(app).get('/api/restaurants')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                expect(res.body).to.be.a('Array');
                done();
            });
    });
})

describe("save restaurants", function () {
    it("should validate that name is greater than 4 characters");
    it("should validate that name is less than 50 characters");
    it("should validate that description is greater than 4 characters");
    it("should validate that description is less than 255 characters");
    
    var newRestaurant = {name: 'What the Fudge', description: 'A cool place to hang out on Friday night at Canley Heights'};
    
    it("should pass the restaurant object and save to database", function (done) {
        request(app).post('/api/restaurants').send(newRestaurant).end(function (err, res) {
            expect(dataSavedRestaurant).to.deep.equal(newRestaurant);
            done();
        })
    });
    
    it("should return a http status of 200 to the front end if the database is saved");
    it("should return a restaurant with an id");
    it("should return an error if the database failed to save");
});
