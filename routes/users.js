var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);
const User = require('../models').User;


/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false}), function (req, res)
{
  var token = getToken(req.headers);
  if (token) {
      User
        .findAll({attributes: ['username', 'email', 'location']})
        .then((items) => res.status(200).send(items))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

module.exports = router;
