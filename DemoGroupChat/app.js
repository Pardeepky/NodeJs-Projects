const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./routes/login')
const messageRoute = require('./routes/message')
const contactUsRoute = require('./routes/contactUs')
const successRoute = require('./routes/success')

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoute);
app.use(messageRoute);
app.use(contactUsRoute);
app.use(successRoute);

app.use(errorController.get404)

app.listen(3000);

