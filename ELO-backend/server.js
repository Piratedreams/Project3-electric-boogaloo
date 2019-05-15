const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('./db/db');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
    origin: 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/', 
    credentials: true, 
}






const postController = require('./controllers/postController');


app.use('/api/v1/post', postController);


app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});