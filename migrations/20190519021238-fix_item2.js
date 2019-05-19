'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn(
      'Items',
      'item_instructions',
      {
        type: Sequelize.TEXT,
        allowNull: true
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
