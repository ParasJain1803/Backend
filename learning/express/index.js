const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    const igData = require("./data.json")
    const {username} = req.params;
    const data = igData[username]

    res.render("ig.ejs", {data})
})

app.listen(port, () => {
    console.log(`app is listening at ${port}`);
})

