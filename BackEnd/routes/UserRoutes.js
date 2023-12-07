const express = require('express');
const router = express.Router();
const { userSignIn, userLogin } = require('../controllers/userControllers');

// Signup route
router.post('/signin', userSignIn);

// Login route
router.post('/login',userLogin );

module.exports = router;