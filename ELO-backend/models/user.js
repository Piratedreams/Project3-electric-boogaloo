const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    summonerName: String,
    rank: String,
});


module.exports = mongoose.model('User', userSchema);


