const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Yadav@1234', {
    dialect: 'mysql',
    host: 'localhost'
});

const Appointments = sequelize.define('Appointments', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});


module.exports = { sequelize, Appointments };