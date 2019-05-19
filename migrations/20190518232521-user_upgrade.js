'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all( [
      queryInterface.addColumn(
      'Users', 'fullname', Sequelize.STRING 
      ),
      queryInterface.addColumn(
      'Users', 'email', Sequelize.STRING 
      ),
      queryInterface.addColumn(
      'Users', 'location', Sequelize.STRING 
      ),
      queryInterface.addColumn(
      'Users', 'role', Sequelize.INTEGER
      ),
      queryInterface.addColumn(
      'Users', 'instructionsdefault', Sequelize.TEXT 
      ),
    ] )
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
