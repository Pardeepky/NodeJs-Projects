const mySql = require('mysql2');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Yadav@1234'
});

module.exports = pool.promise();