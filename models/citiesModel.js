const mongoose = require('mongoose');

const citiesSchema = {
    
    Name: String,
    State: String
}

module.exports = mongoose.model('City', citiesSchema);
