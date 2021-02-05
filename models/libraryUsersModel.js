const mongoose = require('mongoose');

const libraryusersSchema = {
    IsArchived: String,
    Email : String,
    Library: String,
    DisplayName: String,
    
    Groups: String,
    UserName: String,
   
}

module.exports = mongoose.model('LibraryUsers', libraryusersSchema);
