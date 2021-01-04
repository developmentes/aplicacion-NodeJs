 
 'use strict'

 var express = require('express');
 var UserControllerv = require('../controllers/UserController');

 var api = express.Router();

 var md_auth = require('../middlewares/authenticated')

 var multipart = require('connect-multiparty');
 var md_upload = multipart({ uploadDir: './uploads/users'})

 api.get('/probando-controlador', md_auth.ensureAuth, UserControllerv.pruebas);
 api.post('/register', UserControllerv.saveUser);
 api.post('/login', UserControllerv.loginUser);
 api.put('/update-user/:id', md_auth.ensureAuth, UserControllerv.updateUser);
 api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserControllerv.uploadImage);
 
module.exports = api;











