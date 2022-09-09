const jwt = require("jsonwebtoken");
const { JWT_SECRET, TOKEN_EXPIRATION } = require("../constants")

console.log(JWT_SECRET),
module.exports = {
    sign: (obj = {}) =>
    jwt.sign(obj, JWT_SECRET,
     {expiresIn: TOKEN_EXPIRATION }
  ),

  verify: (token) => jwt.verify(token, JWT_SECRET),
};

module.exports.jwt = async (req, res, next) => {
    try {
      const { authorization: token } = req.headers;
      const user = await jwt.verify(token);
      req.context = {
        ...req.context,
        user,
      };
      next();
    } catch (err) {
      res.status(401).send('Unauthorized');
    }
  };