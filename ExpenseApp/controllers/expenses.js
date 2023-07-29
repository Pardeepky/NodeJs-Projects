const { Expenses } = require('../models/expenses')
const path = require('path')

exports.createExpense = async (req, res) => {
    try {
        if (!req.body.expense && !req.body.category && !req.body.description) {
            throw new Error("All the information is mandatory");
        }
        const { expense, category, description } = req.body;
        console.log('exc')
        const exp = await Expenses.create({expense, description, category});
        console.log('ex')
        res.send(exp);
    } catch (e) {
        console.log(e)
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const exp = await Expenses.findAll();
        res.send(exp);
    } catch (e) {
        console.log(e)
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expenses.destroy({ where: { id } });
        res.send(`Expenses with ID ${id} deleted`);
    } catch (e) {
        console.log(e)
    }
}