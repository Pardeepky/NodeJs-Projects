const { Appointments } = require("../utils/db");
const path = require('path');

exports.createAppointment = async (req, res) => {
    try {
        if (!req.body.phone && !req.body.name && !req.body.email) {
            throw new Error("All the information is mandatory");
        }
        const { name, phone, email } = req.body;
        const appointment = await Appointments.create({ name, phone, email });
        res.send(appointment)
    } catch (error) {
        console.log("Controller Function: went wrong");
    }
}

exports.getAppointments = async (req, res) => {
    try {
        const appointment = await Appointments.findAll();
        console.log(appointment);
        res.send(appointment);
    } catch (error) {
        console.log("getUsers Controller Function: went wrong");
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await Appointments.destroy({ where: { id } });
        res.send(`User with ID ${id} deleted`);
    } catch (error) {
        console.log("deleteUser Controller Function: went wrong");
    }
};

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
};