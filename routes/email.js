var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET @ /email */
router.get('/', function(req, res, next) {
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    }
  });

  res.json({"message": "Welcome to the email API @/email"});
  console.log("Welcome to the email API @/email");

});

module.exports = router;
