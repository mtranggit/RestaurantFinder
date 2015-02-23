var express = require("express");
var restaurantModel = require('./models/Restaurant');
var restaurantsData = require("./restaurants-data");

var app = express();
var restaurantService = require("./restaurants-service")(restaurantsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// app.get('/api/restaurants', function(req, res) {
//     // mongoose.model('Restaurant').find({}).exec(function (error, collection) {
//     restaurantsData.findRestaurants().then( function (collection) {
//         res.send(collection);
//     });
// });

app.get('*', function (req, res) {
    res.render('index');
});


//restaurantsData.connectDB('mongodb://localhost/restaurantfinder')
restaurantsData.connectDB('mongodb://ngdev:ngdev@ds045031.mongolab.com:45031/restaurantfinder')
    .then(function () {
        console.log('connected to mongodb successfully');
        restaurantsData.seedRestaurants();
    })

app.listen(process.env.PORT, process.env.IP)