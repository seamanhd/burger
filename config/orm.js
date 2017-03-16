var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  all: function(burgers) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [burgers], function(err, result) {
      console.log("orm all result: " + result);
    });
  }, 

  //how to capture user input? maybe here is not the right step to input? just put in dummies for now - will be vars somewhere else (e.g. "inputName, FALSE")
  insertOne: function(burgers, burger_name, devoured, inputName, FALSE) {
    var queryString = "INSERT INTO ??(?, ?) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [burgers, burger_name, devoured, inputName, FALSE], function(err, result) {
      console.log("orm insert" + result);
    });
  },

  
  //where id = ? update boolean to true
  updateOne: function() {
    var queryString = "";
    connection.query(queryString, [], function(err, result) {
      console.log("orm update: " + result);
    });
  }
};

module.exports = orm;