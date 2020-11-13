import express = require('express');
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
    }
    //este es el metodo que se llame para inicializar una vez buena practica
    static init(puerto: number) {
        return new Server(puerto);

    }

    start(callback:any) {        
    
        this.aplicacion.listen(this.puerto, callback);

        
    }
}