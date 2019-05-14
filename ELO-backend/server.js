const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('./db/db');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
}

app.use(cors());




const postController = require('./controllers/postController');


app.use('/api/v1/post', postController);


app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});