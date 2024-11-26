const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');  // Import functions from controller
const router = express.Router();

// Signup Route
router.post('/signup', registerUser); 

// Login Route
router.post('/signin', loginUser); 

module.exports = router;
