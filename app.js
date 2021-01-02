// aqui esta la logica de express framework

'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/userRute');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras


// Rutas base
app.use('/api', user_routes);

//   app.get('/pruebas',function(req, res) {
//   res.status(200).send({  message: 'Bienvenido al curso de mean2 robles'  });    
//  });

 module.exports  = app;