const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./routes/login')
const messageRoute = require('./routes/message')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(loginRoute);
app.use(messageRoute);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);

