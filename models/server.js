const express = require('express');
const cors = require('cors');



class Server {


    constructor() {
        this.app = express();//instanceo mi clase
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middlewares
        this.middlewares();

        //lectura y parseo del body
        this.app.use(express.json());



        //llamo mis metodos
        this.routes();

    }


    middlewares() {

        //CORS
        this.app.use(cors());

        //directorio public
        this.app.use(express.static('public'));
    }








    //routes
    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));//path para ocupar en la web

    }


    //listen
    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server running on port localhost://${this.port}`);
        })
    }



}




module.exports = Server;