const express = require('express')
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router()

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'login.html'))
})

router.post('/login', (req, res, next) => {
    res.redirect('/')
})

module.exports = router