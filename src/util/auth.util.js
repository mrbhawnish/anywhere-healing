const jwt = require('./jwt.util');

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
