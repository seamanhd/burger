var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  }); 
  //res.render("Hello");
});

/*router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, FALSE
  ], function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {

  burger.updateOne({
    //change boolean here?
  }, function() {
    res.redirect("/");
  });
});*/

// Export routes for server.js to use.
module.exports = router;