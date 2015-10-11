var Restaurant = require('./models/restaurant');

module.exports = function(app) {
    app.get('/', function(req,res) {
        res.sendfile("./public/views/login.html");
    });
    
    app.get('/home', function(req,res) {
        res.sendfile("./public/views/home.html");
    });
    
    app.get('/login',function(req,res) {
        res.sendfile("./public/views/login.html");
    });
    
    app.get('/results', function(req,res) {
        res.sendfile("./public/views/results");
    });
   
};