'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');
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

function loginUser(req, res){
    var params = req.body;

    var email = params.email;
    var password = params.password;

User.findOne({email: email.toLowerCase()}, (err, user) => {//esto es parecido al where ya que estamos rescatando los totdos email que sean email
                                            // y usamos toLowerCase para dejarlo en minuscula

    if (err) {
        res.status(500).send({message:'error en la peticion'});

    }else{
        if (!user) {

            res.status(404).send({message:'El usuario no existe'});


        }else{
            //comprobar la contraseña
            bcrypt.compare(password, user.password, function (err, checks) {
                    if(checks) {
                        //devolver los datos del usuario
                        if (params.gethash) {

                            //devolver un token de jwt
                            res.status(200).send({
                                token: jwt.createToken(user)

                            });
                            
                        }else{
                            res.status(200).send({user})
                        }
                        
                    }else{

                        res.status(404).send({message: 'El usuario no ha pododo logearse'})
                    }

                });
            }
    }
});

   
    

}


 function updateUser(req, res){

    var userId = req.params.id;
    var update = req.body;
     User.findByIdAndUpdate(userId, update, (err, userUpdated) => {

        if (err) {
            res.status(500).send({message: 'Error al actualizar el usuario'});
        }else{
            if (!userUpdated) {
                res.status(404).send({message: 'No se ha podido actualizar el usuario'});

            }else{
                res.status(200).send({user: userUpdated});
            }
        }
     }
   

     )};

     function uploadImage(req, res) {
         var userId = req.params.id;
         var file_name = 'No subido..';

         if (req.files) {
             var file_path = req.files.image.path;
              var file_split = file_path.split('\\');
              var file_name = file_split[2];

             var ext_split = file_name.split('\.');
             var file_ext = ext_split[1];

              if (file_ext == 'png ' || file_ext == 'jpg' || file_ext == 'gif') {
                 
                     User.findOneAndUpdate(userId, {image: file_name}, (err, userUpdated) => {
                        
                        if (!userUpdated) {
                             res.status(404).send({message: 'No se ha podido actualizar el usuario'});
                    

                      }else{

                  res.status(200).send({massage: 'Extension deel archivo no valida'});
                    }
            });
                     
             
               }else{
              res.status(200).send({message: 'No has subido ninguna imagen...'});
              }
         }
     }
        
module.exports = {
    pruebas,
    saveUser,
    loginUser,
    updateUser,
    uploadImage
    
    //con esto se exportan los metodos que utilizaremos ,en este caso
    //hasta el momento solo tenemos el metodo pruebas
};
