const mongoose = require('mongoose');

const librariesSchema = {
    IsArchived: String,
    UniversityName: String,
    Disclaimer: String,
    Name: String,
    Email : String,
    Phone: String,
    Address: String,
   
}

module.exports = mongoose.model('Libraries', librariesSchema);
