var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 8000;
var server_ip_address = '127.0.0.1'
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./config/database');
var morgan = require('morgan');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


//============= middlewares ================ //
mongoose.connect(database.localUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies 
app.use(bodyParser.urlencoded({'extended': true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});

//============ session and passport ============//
app.use(session({ secret: 'secret',resave: true,
    saveUninitialized: true})); 
app.use(passport.initialize());
app.use(passport.session()); 

// ========== passport config ========= //
require('./config/passport')(passport)


// ============ routes =========== //
app.use('/auth',require('./app/authRoutes')(passport))


server.listen(port,server_ip_address, function () {
  console.log( "running on " + server_ip_address + ":" + port )
});
