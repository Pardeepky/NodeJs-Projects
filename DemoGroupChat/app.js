const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./routes/login')
const messageRoute = require('./routes/message')
const contactUsRoute = require('./routes/contactUs')
const successRoute = require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoute);
app.use(messageRoute);
app.use(contactUsRoute);
app.use(successRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);

