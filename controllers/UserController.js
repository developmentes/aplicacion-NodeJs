'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user')

function pruebas(req, res) {
    
    res.status(200).send({
        message : 'Probando una accion del controlador de usuarios del API-REST con NODE Y Mongo'
    });
}

function saveUser(req, res) {
    var user = new User();

    //peticion por POST RECOGEMOS LOS VALORES

    var params = req.body;

    console.log(params);
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_ADMIN';
    user.image  = 'null';

    if (params.password) {
        //Encriptar contraseña y guardar datos
        bcrypt.hash(params.password, null, null, function (err,hash) {

           user.password = hash;


           if (user.name != null && user.surname != null && user.email != null) {
               //Guardar usuario

               user.save((err, userStored) => {
                   if (err) {
                       res.status(500).send({message: 'Error no se pudo guardar el usuario'});
                   } else {
                       if (!userStored) {
                        res.status(404).send({message: 'no se ha registrado  el usuario'});

                       }else{
                        res.status(200).send({user: userStored});

                       }
                   }
               }

               
               )}else {
               res.status(200).send({message: 'Completa todos los campos'});
               
           } 
        });

        
    } else {
        res.status(500).send({message: 'Introduce la contraseña'})
        
    }
}
module.exports = {
    pruebas,
    saveUser
    //con esto se exportan los metodos que utilizaremos ,en este caso
    //hasta el momento solo tenemos el metodo pruebas
};
