'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.INTEGER,
    instructionsdefault: DataTypes.TEXT,
  }, {underscored: true});
  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };
  User.associate = function(models) {
    User.hasMany(models.Item, {
      foreignKey: 'user_id',
      as: 'items',
    })
  };
  return User;
};