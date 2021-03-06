var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // What else do I need to put in here?
  insertOne: function(inputName, cb) {
    orm.insertOne("burgers", function(res) {
      cb(res);
    });
  },
  updateOne: function(cb) {
    orm.updateOne("burgers", function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;