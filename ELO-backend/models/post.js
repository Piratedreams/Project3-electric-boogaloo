const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    username: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('Post', postSchema);


