 
 'use strict'
 var express = require('express');
 var UserControllerv = require('../controllers/UserController');

 var api = express.Router();

 api.get('/probando-controlador', UserControllerv.pruebas);
 api.post('/register', UserControllerv.saveUser);
 
 
module.exports = api;
