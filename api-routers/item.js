const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);

const Item = require('../models').Item;


router.get('/', passport.authenticate('jwt', { session: false}), function (req, res)
{
  var token = getToken(req.headers);
  if (token) {
      Item
        .findAll()
        .then((items) => res.status(200).send(items))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.post('/', passport.authenticate('jwt', { session: false}), function (req, res)
{
  var token = getToken(req.headers);
  if (token) {
      Item
        .create({
          item_name: req.body.item_name,
          item_desc: req.body.item_desc,
          user_id: req.body.user_id,
          item_instructions: req.body.item_instructions,
          item_default_inst_suppress: req.body.item_default_inst_suppress
        })
        .then((item) => res.status(201).send(item))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

module.exports = router;