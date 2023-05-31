var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to the email API @/"});
  console.log("Welcome to the email API @/")
});

module.exports = router;
