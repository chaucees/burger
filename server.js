// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// Files
var routes = require('./controllers/burgers_controller.js';)

// Call Express
var app = express();

// Define port
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);

// Set layouts
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Activate app
app.listen(PORT, function() {
    console.log('App listening on localhost: ' + PORT);
})