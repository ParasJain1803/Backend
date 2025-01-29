const express = require("express");
const app = express(); 

let port = 3000;

app.get("/", (req, res) => {
    res.send("helo")
})

app.get("/twitter", (req, res) => {
    res.send("helo")
})

app.listen(port, () => {
    console.log(`app is listening at ${port}`);
})

