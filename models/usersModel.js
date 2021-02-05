const mongoose = require('mongoose');

const usersSchema = {
    IsArchived: String,
    UserName: String,
    DisplayName: String,
    Email: String,
    Role: String,
   
   
}

module.exports = mongoose.model('User', usersSchema);