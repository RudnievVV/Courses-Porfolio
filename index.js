const express = require("express");
const exphbs  = require('express-handlebars');

const port = 3000

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("."));

const my_urls = {
    home_url: "/",
    skills_url: "/skills",
    about_url: "/about",
    experience_url: "/experience",
}

app.get('/', function (req, res) {
    res.render('home', {
        page_title: "Rudniev Vladyslav | Portfolio",
        my_urls,
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        page_title: "About Page",
        my_urls,
    });
});

app.get('/experience', function (req, res) {
    res.render('experience', {
        page_title: "My Experience",
        my_urls,
    });
});

app.get('/skills', function (req, res) {
    res.render('skills', {
        page_title: "My Skills",
        my_urls,
    });
});

app.listen(port, function () {
  console.log(`My portfolio listening on port ${port}!`);
});