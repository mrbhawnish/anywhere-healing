const express = require('express');
const controller = require('../../controllers/v1/users.controller');
const auth = require('../../middlewares/auth.middleware')
const router = express.Router();

// router.post('/auth', controller.auth);
 // Register
router.post('/register', auth.jwt, controller.register);
    
// Login
router.post("/login", controller.login);

module.exports = router;
