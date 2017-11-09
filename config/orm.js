// Import MySQL connection.
var connection = require("../config/connection.js");

// Methods to execute the MySQL commands in the controllers. Methods to store and retrieve
// data in the database.
//========================================================================================

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  // Creates a new delicious burger
  create: function(val, cb) {
  	// Formatting for the MySQL npm package utilizing placeholder
    var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
    console.log(queryString);
    connection.query(queryString, [val], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // Copied from the MVC Example in-class excercise 17. Originally the 'create' method.
  // insertOne: function(table, cols, vals, cb) {
  //   var queryString = "INSERT INTO " + table;

  //   queryString += " (";
  //   queryString += cols.toString();
  //   queryString += ") ";
  //   queryString += "VALUES (";
  //   queryString += printQuestionMarks(vals.length);
  //   queryString += ") ";

  //   console.log(queryString);

  //   connection.query(queryString, vals, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },

  // An example of objColVals would be {name: panther, sleepy: true}
//   updateOne: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
};


//========================================================================================

// Export the orm object for the model (burgers.js).
module.exports = orm;

//========================================================================================