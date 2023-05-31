var express = require('express');
var router = express.Router();

/* GET @ /email */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to the email API @/email"});
  console.log("Welcome to the email API @/email");
});

module.exports = router;
