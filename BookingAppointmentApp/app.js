const express = require('express');
const cors = require('cors')

const app = express();

const router = require('./routes/routes')
const { sequelize } = require("./utils/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router)

sequelize.sync().then(
    app.listen(3000, () => {
        console.log(`App listening at http://localhost:3000`);
    })
);