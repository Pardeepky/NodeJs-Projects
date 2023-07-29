const express = require('express');
const cors = require('cors');
const port = 4000;
const routes = require('./routes/routes')
const { sequelize } = require('./models/expenses')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

sequelize.sync().then(app.listen(port, () => {
    console.log(`Server running on ${port}`);
})).catch(e => { console.log(e) })