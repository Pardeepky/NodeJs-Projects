const express = require('express')
const fs = require("fs");
const router = express.Router()

router.get("/", (req, res) => {
    fs.readFile("userName.txt", (err, data) => {
        if (err) {
            console.log(err);
            data = "No chat exist";
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <br />
                <button type="submit">Send</button>
            </form>`)
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