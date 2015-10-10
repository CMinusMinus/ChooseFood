var Restaurant = require('./models/restaurant');

module.exports = function(app) {
    
    //back end
    
    
    
    
    //front end
    app.get('*', function(req,res) {
       res.sendfile('./public/views/index.html'); 
    });
};