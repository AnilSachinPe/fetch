const mongoose = require('mongoose');

const groupsSchema = {
   
    Name: String,
    DisplayName : String
   
}

module.exports = mongoose.model('Group', groupsSchema);
