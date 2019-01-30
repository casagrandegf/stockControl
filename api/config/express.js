var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

/**
*	Main app function, using express;
*	  - Headers configuration;
*	  - Load routes (all api's methods)
*	  - define global functions (i.e. Sentry)
*	@module App
*
*/
module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	
	// Add headers
	app.use(function(req, res, next) {

		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', '*');
		
		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
		// // Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	
		// // Set to true if you need the website to include cookies in the requests sent
		res.setHeader('Access-Control-Allow-Credentials', true);

		res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept, token");
			
		// Pass to next layer of middleware
		next();
	});
  load('controller', {cwd: 'app'})
		.then('routes')
		.then('model')
		.into(app);


	/// method for the clients test the connection
	app.get('/connected', function(req, res){
		result = {connected: true};
		res.send(result);
	});

	return app;
};