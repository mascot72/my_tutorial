// serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Promise = require('mpromise');

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error);


mongoose.connect('mongodb://localhost/mongodb_tutorial');

// DEFINE MODEL
var Book = require('./models/book');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8081;

db.once('open', function(){
	// CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");

});

// [CONFIGURE ROUTER]
var routerModule = require('./routes')(app, Book);
// [RUN SERVER]
var server = app.listen(port, function(){
	console.log("Express server has started on port %s", port);
});