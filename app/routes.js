var Restaurant = require('./models/restaurant');

module.exports = function(app) {
    
    //back end
    app.get('restaurants', function(req,res) { //find all the restaurants
        
        Restaurant.find(function(err, restaurants) {
            if (err)
                res.send(err)
            res.json(restaurants);
        });
    });
    
    
    
    
    //front end
    app.get('*', function(res,req) {
       res.sendfile('./public/views/index.html'); 
    });
};