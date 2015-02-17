var mongoose = require("mongoose");

var restaurantSchema = mongoose.Schema({
    name: {type: String},
    description: {type: String},
    suburb: {type: String},
    state: {type: String}
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

exports.seedRestaurants = function () {
    Restaurant.find({}).exec(function (error, collection) {
        if (collection.length == 0) {
            Restaurant.create({ name: 'Steak on the Rock', description: 'Enjoy your steak cooked on the Rock to your likey', suburb: 'Canley Heights', state: 'NSW'});
            Restaurant.create({ name: 'Phu Quoc', description: 'Best place to enjoy Com Suon and Pho', suburb: 'Cabrammatta', state: 'NSW'});
            Restaurant.create({ name: 'Loving Hutt', description: 'Make Peace and be an Vegan today!', suburb: 'Canley Heights', state: 'NSW'});
            Restaurant.create({ name: 'Spicy Aroma', description: 'Authentic Lao Thai food', suburb: 'Canley Heights', state: 'NSW'});
            Restaurant.create({ name: 'Ptj Kitchen', description: 'Yummy Thai Food @ Surry Hills', suburb: 'Surry Hills', state: 'VIC'});
        }
    })
}