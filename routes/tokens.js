
var express = require('express');
var router = express.Router();

var User = require('../models/user');

// login
router.post('/', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email + ": " + password);
  User.authenticate(email, password, (err, user) => {
    if (err) {
      return res.status(520).json({
        "error": err
      });
    }
    
    if (user) {
      console.dir(`generateToken, got user: ${user}`)
      let token = user.generateToken();
      console.log(`token: ${token}`)
      res.json({ data: user, token: token })
    } else {
      res.status(520).json({
        "error": 'unknown error'
      });
    }
    
  });
});

module.exports = router;