var bodyParser = require("body-parser");

module.exports = function(db, app) {
    app.use(bodyParser.json());
    
    app.get('/api/restaurants', function(req, res) {
        db.findRestaurants().then(function (collection) {
            res.send(collection);
        })    
    });
    
    app.post('/api/restaurants', function (req, res) {
       db.saveRestaurant(req.body);
       res.end();
    });

}