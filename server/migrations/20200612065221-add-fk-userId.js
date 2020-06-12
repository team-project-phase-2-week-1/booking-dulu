'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Bookings', ['UserId'], {
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Bookings', 'custom_fkey_constraint_UserId');
  }
};
