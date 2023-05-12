const express = require('express')
const router = express.Router()

const productController = require('../controllers/contactUs');

router.get('/contactUs', productController.getContact);

router.post('/contactUs', productController.postContact);

module.exports = router