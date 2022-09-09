const { DataTypes } = require('sequelize');
const db = require('../models/index')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('disease-code', {
      disease: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: db.sequelize.literal(
            "CURRENT_TIMESTAMP"
          ),
        allowNull: false
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: db.sequelize.literal(
            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
          ),
        allowNull: false
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('disease-code');
  },
};
