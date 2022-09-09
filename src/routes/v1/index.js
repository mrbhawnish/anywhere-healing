const express = require('express');

const router = express.Router();

router.use('/users', require('./user.routes'));
// router.use('/biomagnetics', require('./biomagnetic.routes'));

module.exports = router;
