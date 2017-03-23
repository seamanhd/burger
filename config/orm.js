var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  all: function(burgers, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [burgers], function(err, result) {
      if(err) throw err;
      console.log("orm all result: " + result);
      cb(result);
    });
  },

  //how to capture user input? maybe here is not the right step to input? just put in dummies for now - will be vars somewhere else (e.g. "inputName, FALSE")
  insertOne: function(inputName, cb) {
    var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, false)";
    console.log(queryString);
    connection.query(queryString, [inputName], function(err, result) {
        console.log("orm insert" + result);
         cb(result);
    });


  

  },


  //where id = ? update boolean to true
  updateOne: function(bugers, devoured, TRUE, id, inputID) {
    var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";
    console.log(queryString);
    connection.query(queryString, [burgers, devoured, TRUE, id, inputID], function(err, result) {
      console.log("orm update: " + result);
    });
  }
};

module.exports = orm;
