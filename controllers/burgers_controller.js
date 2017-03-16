var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgere: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {

  burger.update({
    //change boolean here?
  }, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;