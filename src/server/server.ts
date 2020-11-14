import express = require('express');
import path = require('path');

import bodyParser = require('body-parser');

//inicializando el servidor de node
//esta clase se importad por default
export default class Server {

    public aplicacion: express.Application;
    public puerto: number;

    constructor(
        puerto: number
    ) {
        this.puerto = puerto;
        this.aplicacion = express();
        this.aplicacion.use(bodyParser.json()); // support json encoded bodies
        this.aplicacion.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    }
    //este es el metodo que se llame para inicializar una vez buena practica
    static init(puerto: number) {
        return new Server(puerto);

    }

    private publicfolder() {

        const publicpath = path.resolve(__dirname, '../public');
        this.aplicacion.use(express.static(publicpath));

    }

    start(callback: any) {
        //servidor escuchando.
        this.aplicacion.listen(this.puerto, callback);
        this.publicfolder()


    }
}