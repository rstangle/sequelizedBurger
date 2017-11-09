var express = require("express");

// Not sure what router is. Looked it up on Expressjs.com docs and I don't follow the explanation.
// Putting this is since it is in the in-class example #17 MVC Example.
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");

//=======================================================================================================
// Commenting out until I can figure out what its doing. From in-class example #17 MVC Example.

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burgers.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
  	burgers.create(req.body.burger, function(data){
  		res.redirect("/");
	});
});

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

//=====================================================================================================

// Export routes for server.js to use.
module.exports = router;

//=====================================================================================================