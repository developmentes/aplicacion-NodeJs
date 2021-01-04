'use strict'

var mongoose = require('mongoose');
// mongoose.set('useUnifiedTopology', true);

var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2'                                                ,{ useNewUrlParser: true }, (err, res) =>{

if (err) {
    throw err;
}else{

    console.log("la conexion a la base de datos esta funcionando correctamente");

    app.listen(port, function () {
        console.log("Servidor de API REST De musica escuchando en la url con puerto "+port +  "  Ruta =  http://localhost:"+port);
        
    });
}

});
