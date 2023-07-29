const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Yadav@1234', {
    dialect: 'mysql',
    host: 'localhost'
});

const Expenses = sequelize.define('expenses', {
    expense: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }
})

module.exports = { sequelize, Expenses }