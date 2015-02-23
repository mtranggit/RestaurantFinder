var mongoose = require("mongoose");
var Promise = require("bluebird");
var restaurantModel = require('./models/Restaurant');

var Restaurant = mongoose.model('Restaurant');

var findRestaurants = function (query) {
    return Promise.cast(Restaurant.find(query).exec());
}

var createRestaurant = Promise.promisify(Restaurant.create, Restaurant);

exports.findRestaurants = findRestaurants;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveRestaurant = createRestaurant;

exports.seedRestaurants = function () {

    return findRestaurants({}).then( function ( restaurantList) {
        if (restaurantList.length === 0 ) {
            return Promise.map(restaurants, function(restaurant) {
                return createRestaurant(restaurant);
            });
        }
    });
}

var restaurants = [
                    { name: 'Steak on the Rock', description: 'Enjoy your steak cooked on the Rock to your likey', suburb: 'Canley Heights', state: 'NSW'},
                    { name: 'Phu Quoc', description: 'Best place to enjoy Com Suon and Pho', suburb: 'Cabrammatta', state: 'NSW'},
                    { name: 'Loving Hutt', description: 'Make Peace and be a Vegan today!', suburb: 'Canley Heights', state: 'NSW'},
                    { name: 'Spicy Aroma', description: 'Authentic Lao Thai food', suburb: 'Canley Heights', state: 'NSW'},
                    { name: 'Huong Xua', description: 'Authentic Northern Vietnamese food', suburb: 'Canley Heights', state: 'NSW'},
                    { name: 'Ptj Kitchen', description: 'Yummy Thai Food @ Surry Hills', suburb: 'Surry Hills', state: 'VIC'}
                ];
