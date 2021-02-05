const mongoose = require('mongoose');

const countriesSchema = {
    
    Name: String,
   
}

module.exports = mongoose.model('Country', countriesSchema);
