'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_name: DataTypes.STRING,
    item_desc: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    item_instructions: DataTypes.TEXT,
    item_default_inst_suppress: DataTypes.BOOLEAN
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};