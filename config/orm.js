var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(burgers) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString, [burgers], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(burger_name) {
    var queryString = "INSERT INTO burgers(burger_name) VALUES ?";
    console.log(queryString);
    connection.query(queryString, [burgers, burger_name], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function() {
    var queryString = "";
    connection.query(queryString, [], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;