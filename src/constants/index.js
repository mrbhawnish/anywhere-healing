require("dotenv").config();

const { JWT_SECRET, TOKEN_EXPIRATION } = process.env;

module.exports = {
  JWT_SECRET,
  TOKEN_EXPIRATION,
};
