const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    body: String,
    date: Date
});


module.exports = mongoose.model('User', userSchema);


