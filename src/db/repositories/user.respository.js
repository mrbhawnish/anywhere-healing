const Sequelize = require('sequelize');
const { sequelize } = require('../../../models');
const { User } = require('../../../models/user.model');

const { SELECT, DELETE, INSERT, UPDATE } = Sequelize.QueryTypes;

const getUserById = async (id) => User.findOne({ where: { uid: id } });

const createUser = async (userName, firstName, lastName, email, password) => {
 await sequelize.query(
      `
      INSERT INTO users (userName, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)
      `,
      {
        replacements: [userName, firstName, lastName, email, password],
        type: INSERT,
      }
    );
}

const getUserByEmail = async (email) => {
  const user = await sequelize.query(
        `
        SELECT * FROM users WHERE email = ?
        `,
        {
          replacements: [email],
          type: SELECT,
        }
      );
      
      return user;
  }

const getUserByUserName = async (userName) => {
 const user = await sequelize.query(
       `
       SELECT * FROM users WHERE userName = ?
       `,
       {
         replacements: [userName],
         type: SELECT,
       }
     );

     return user;
 }
  


module.exports = {
  getUserById,
  createUser,
  getUserByEmail,
  getUserByUserName,
};
