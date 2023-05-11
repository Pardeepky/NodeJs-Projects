const express = require('express')

const router = express.Router()

router.get('/login', (req, res, next) => {
    res.send(`<form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type="text" name="username" placeholder="username" id="username">
    <br />
    <button type="submit">Login</button>
</form>`)
})

router.post('/login', (req, res, next) => {
    res.redirect('/')
})

module.exports = router