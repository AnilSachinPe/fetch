const mongoose = require('mongoose');

const statesSchema = {
    Country: String,
    Name: String
   
}

module.exports = mongoose.model('State', statesSchema);
