const express = require('express')
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router()

const successController = require('../controllers/success');

router.get('/success', successController.getSuccess);

module.exports = router