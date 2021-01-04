
'use strict'

var jtw = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso'

exports.createToken = function (user) {

        var payload = {    //payload son los datos que se codificaran para el token por eso la variable lleva este nombre


            sub: user._id,//la propiedad sub se usa para el id del objeto en este caso el usuario
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
            image: user.image,
            iat: moment().unix(),//fecha actual para el token
            exp: moment().add(30, 'days').unix//fecha de expiracion ,en este caso que expire en 30 dias (30,'days')
        };

        return jtw.encode(payload, secret);//codificamos secret es la clave secreta
};

