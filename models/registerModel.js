const mongoose = require('mongoose');

const registerSchema = {
   
    userName: String,
    email: String,
    password: String
   
   
}

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;