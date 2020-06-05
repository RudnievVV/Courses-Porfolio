const express = require("express");
const exphbs  = require('express-handlebars');
const js2xmlparser = require("js2xmlparser");

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

app.get('/route/users', function(req, res) {
    let users = [
        {
          name: "Petya",
          surName: "Petyanov",
          age: 22,
          nickName: "pet4uha"
        },
        {
          name: "Vasya",
          surName: "Vasilkov",
          age: 44,
          nickName: "vasile4ek"
        },
        {
          name: "Ivan",
          surName: "Ivanov",
          age: 66,
          nickName: "ivanovi4"
        },
        {
          name: "Abdula",
          surName: "Abrahamanov",
          age: 88,
          nickName: "ibnSallah"
        }
    ]
    if (req.headers["content-type"]){
        if (req.headers["content-type"] == 'application/json') {
            res.send(users);
        }
        else if (req.headers["content-type"] == 'application/xml') {
            res.send(js2xmlparser.parse('users', users));
        }
        else {
            res.send('bad request')
        };
    }
    else {
        // res.send('bad request')
        res.send(users);
    };
});

app.route('/route/users')
    .get(function(req, res) {
        let users = [
            {
              name: "Petya",
              surName: "Petyanov",
              age: 22,
              nickName: "pet4uha"
            },
            {
              name: "Vasya",
              surName: "Vasilkov",
              age: 44,
              nickName: "vasile4ek"
            },
            {
              name: "Ivan",
              surName: "Ivanov",
              age: 66,
              nickName: "ivanovi4"
            },
            {
              name: "Abdula",
              surName: "Abrahamanov",
              age: 88,
              nickName: "ibnSallah"
            }
        ]
        if (req.headers["content-type"]){
            if (req.headers["content-type"] == 'application/json') {
                res.send(users);
            }
            else if (req.headers["content-type"] == 'application/xml') {
                res.send(js2xmlparser.parse('users', users));
            }
            else {
                res.send('bad request')
            };
        }
        else {
            // res.send('bad request')
            res.send(users);
        };
    })
    .post(function (req, res) {
    res.status(405).send('POST Method Not Allowed')
    })
    .put(function (req, res) {
    res.status(405).send('PUT Method Not Allowed')
    })
    .delete(function (req, res) {
    res.status(405).send('DELETE Method Not Allowed')
    })

app.listen(port, function () {
  console.log(`My portfolio listening on port ${port}!`);
});