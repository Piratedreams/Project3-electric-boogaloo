const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

require('./db/db');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', // when you deploy your react app, this is where you put the address
    credentials: true, //allowing cookies to be sent with requests from the client (session cookie,)
    optionsSuccessStatus: 200 // some legacy browsers, and options requests
}

app.use(cors());




const owlController = require('./controllers/owlController');
const authController = require('./controllers/authController');

app.use('/api/v1/movies', movieController);
app.use('/auth', authController);

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});