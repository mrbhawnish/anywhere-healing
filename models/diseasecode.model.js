const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Diseasecode extends Model {}

const diseasecodeDTO = {
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
    defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP"
      ),
    allowNull: false
  },
  updatedAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    allowNull: false
  }
};

Diseasecode.init(diseasecodeDTO, {
  timestamps: false,
  sequelize,
  tableName: 'disease-code',
});


module.exports = {
  model: Diseasecode,
  diseasecodeDTO,
};
