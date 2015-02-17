var express = require("express");
var mongoose = require("mongoose");
var restaurantModel = require('./models/Restaurant');


var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/restaurants', function(req, res) {
    mongoose.model('Restaurant').find({}).exec(function (error, collection) {
        res.send(collection);
    });
});

app.get('*', function (req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/restaurantfinder');
mongoose.connect('mongodb://ngdev:ngdev@ds045031.mongolab.com:45031/restaurantfinder');

var con = mongoose.connection;

con.once('open', function () {
    console.log('connected to mongodb successfully');
    restaurantModel.seedRestaurants();
});

app.listen(process.env.PORT, process.env.IP)