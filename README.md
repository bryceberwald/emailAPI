# This is a simple email API using nodeJS 

### This is how I started the project

##### 1. Create a new Folder/Directory
```bash
mkdir projectName
```
##### 2. Go into the folder
```bash
cd projectName
```
##### 3. Using express generator
```bash 
npx express-generator .
```

##### 4. Adding dependencies included with express-generator
```bash
npm install
```

## Trying running the program now
```bash
npm start
```

### Change the users route to look like this
```javascript
var express = require('express');
var router = express.Router();

/* GET @ /email */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to the email API @/email"});
  console.log("Welcome to the email API @/email");
});

module.exports = router;
```

### Remember to rename the file to email.js & change variables in app.js accordingly
```javascript
var indexRouter = require('./routes/index');
var emailRouter = require('./routes/email');
```

## And further down app.js
```javascript
app.use('/', indexRouter);
app.use('/email', emailRouter);
```

## More documentation coming soon...