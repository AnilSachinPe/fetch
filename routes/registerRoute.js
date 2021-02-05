const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel');

router.route('/create').post((req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new Register({
        userName,
        email,
        password

    });
    newUser.save();
})

router.route('/getUsers').post((req, res) => {
    City.find({}) 
        .then(foundUsers => res.json(foundUsers))
       
})

module.exports = router;