const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class User extends Model {}

const userDTO = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP"
      ),
    allowNull: false
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    allowNull: false
  }
};

User.init(userDTO, {
  timestamps: false,
  sequelize,
  tableName: 'users',
});

const applyAssociations = (models) => {}

module.exports = {
  model: User,
  userDTO,
  applyAssociations,
};
