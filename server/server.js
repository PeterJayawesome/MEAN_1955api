var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');


require('./config/mongoose.js');

var routes_setter = require('./config/routes.js');

routes_setter(app);

app.listen(8000,function(){
	console.log("Listening on port 8000!")
})