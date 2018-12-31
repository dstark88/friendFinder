var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var friends = require("./app/data/friends.js");

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(express.static(__dirname + "/app/public"))


  require("./app/routing/htmlRoutes.js")(app);
  require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  