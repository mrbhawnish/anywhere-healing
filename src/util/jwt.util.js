const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = {
    sign: (obj = {}) => 
    jwt.sign(obj, JWT_SECRET, {
        expiresIn: '168h'
    }),

    verify: (token) => jwt.verify(token, JWT_SECRET),
};