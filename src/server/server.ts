import express = require('express');
//inicializando el servidor de node
//esta clase se importad por default
export default class Server {

    public aplicacion:express.Application;
    public puerto: number;

    constructor(
        puerto: number
    ){
        this.puerto = puerto;
        this.aplicacion = express();

    }
}