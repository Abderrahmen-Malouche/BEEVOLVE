const bcrypt = require('bcrypt');
const User = require('../models/User')

const userSignIn = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const newUser = await user.save();
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user &&  req.body.password == user.password) {
            res.json({ message: "Logged in successfully" });
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    userSignIn,
    userLogin
  };