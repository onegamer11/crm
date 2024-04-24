// authRoutes.js

const express = require('express');
const router = express.Router();
const {registerUser, loginUser } = require('../controllers/authController');

// Authentication routes
router.post('/login', function(req, res) { loginUser});
router.post('/register', function(req, res ) { registerUser});
// router.post('/logout', logoutUser);

module.exports = router;
