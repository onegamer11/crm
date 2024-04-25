// authRoutes.js

const express = require('express');
const router = express.Router();
const {registerUser, loginUser } = require('../controllers/authController');

// Authentication routes
router.post('/login',  loginUser);
router.post('/register',  registerUser);
// router.post('/logout', logoutUser);

module.exports = router;
