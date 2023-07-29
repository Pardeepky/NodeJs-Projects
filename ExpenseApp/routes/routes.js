const express = require('express');

const routes = express.Router();

const controllers = require('../controllers/expenses');

routes.post('/createExpense', controllers.createExpense);
routes.get('/getExpense', controllers.getExpenses);
routes.delete('/deleteExpense/:id', controllers.deleteExpense)

module.exports = routes