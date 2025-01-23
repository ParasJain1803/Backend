const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})

app.use((req, res) => {
    console.log(`Request received}`);
    res.send("Hello, world!");
})
