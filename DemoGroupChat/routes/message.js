const express = require('express')
const path = require('path');
const fs = require("fs");
const rootDir = require('../util/path');
const router = express.Router()

router.get("/", (req, res) => {
    fs.readFile("userName.txt", (err, data) => {
        if (err) {
            console.log(err);
            data = "No chat exist";
        }
        res.sendFile(path.join(rootDir, 'views', 'message.html'))
    });
});
router.post("/", (req, res) => {
    if (req.body.username && req.body.message) {
        fs.writeFile(
            "userName.txt",
            `${req.body.username}: ${req.body.message} `,
            { flag: "a" },
            (err) => (err ? console.log(err) : null)
        );
    }
    res.redirect("/");
});

module.exports = router