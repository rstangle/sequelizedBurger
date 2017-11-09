// Variables
//================================================================================

var express = require("express");
var methodOverride = require('method-override')
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
// Set Handlebars.
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

//================================================================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);
