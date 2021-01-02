 
 'use strict'
 var express = require('express');
 var UserControllerv = require('../controllers/UserController');

 var api = express.Router();

 api.get('/probando-controlador', UserControllerv.pruebas);
 
module.exports = api;
