var mongoose = require("mongoose");

var restaurantSchema = mongoose.Schema({
    name: {type: String},
    description: {type: String},
    suburb: {type: String},
    state: {type: String}
});

mongoose.model('Restaurant', restaurantSchema);
