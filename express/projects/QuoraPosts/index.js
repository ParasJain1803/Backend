const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));

let posts = [];

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});