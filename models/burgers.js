var orm = require("../config/orm.js");

// Code to call the ORM functions using burger specific input for the ORM
//=====================================================================================

var burger = {
	// this function goes to the ORM file.  passes arguements burgers and function(res)
	//"burgers" refers to the table in the db
	selectAll: function(cb) {
    	orm.selectAll("burgers", function(res) { 
     	 cb(res);
    	});
  	},
  	create: function(val, cb) {
  		orm.create(val, function(res) {
  			cb(res);
  		});
  	},
  	update: function(objColVals, condition, cb) {
   		orm.update("cats", objColVals, condition, function(res) {
      		cb(res);
   		});
  	}
};

//=====================================================================================

// Export the database functions for the controller (catsController.js).
module.exports = burger;

//=====================================================================================