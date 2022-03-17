'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      eventId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      eventName: {
        type: Sequelize.STRING
      },
      eventLocation: {
        type: Sequelize.STRING
      },
      eventImage: {
        type: Sequelize.STRING
      },
      eventStartDate: {
        type: Sequelize.DATE
      },
      eventEndDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};