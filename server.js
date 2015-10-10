<<<<<<< HEAD
//modules
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config files
var db = require('./config/db');

//port
var port = process.env.PORT || 3000;

//connect to mongDB database
mongoose.connect(db.url);

//parse json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

//routes
require('./app/routes')(app); //configure roots

//start app
app.listen(port); //check port
console.log('Magic happens on port '+port);

//expose app
exports = module.exports = app;
=======
// This is just a sample code to test. We are not gonna use exact code below.

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
>>>>>>> 9228c991ef17ebf73830553c8e26aa0a031a9b22
