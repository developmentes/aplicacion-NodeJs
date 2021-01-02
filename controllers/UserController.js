'use strict'

function pruebas(req, res) {
    
    res.status(200).send({
        message : 'Probando una accion del controlador de usuarios del API-REST con NODE Y Mongo'
    });
}
module.exports =   {
    pruebas
    //con esto se exportan los metodos que utilizaremos ,en este caso
    //hasta el momento solo tenemos el metodo pruebas
};
