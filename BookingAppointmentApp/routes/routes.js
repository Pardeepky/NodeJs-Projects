const express = require('express');

const routes = express.Router();

const controllers = require('../controllers/controller');

routes.get('/', controllers.home);
routes.post('/createAppointment', controllers.createAppointment);
routes.get('/getAppointments', controllers.getAppointments);
routes.delete('/deleteAppointment/:id', controllers.deleteAppointment);

module.exports = routes