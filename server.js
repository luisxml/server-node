const express = require('express');
const app = express();

const hbs = require('hbs');


app.use(express.static( __dirname + '/public'));

// expres hbs engne
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Luis Galicia'
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        nombre: 'Luis Galicia'
    });
});

// app.get('/', (req, res) => {
//     // res.send('Hello wolrd!!!');
//     let salida = {
//         nombre: 'Luis',
//         apellido: 'Galicia',
//         telefono: 929647791,
//         url: req.url
//     };

//     res.send(salida);
// });

// app.get('/hola', (req, res) => {
//     res.send('Hello wolrd!!!');
// });

app.listen(8080, ()=> {
    console.log('Escuhando peticiones en el puerto 8080');
});