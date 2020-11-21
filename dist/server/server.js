"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
//import chalk = require('chalk');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
//inicializando el servidor de node
//esta clase se importad por default
class Server {
    constructor(
    /********************************************
     * puerto al momento de instanciar la clase servidor
     * requiere como el numero del puerto donde iniciara
     *  el servidor
     ********************************************/
    puerto) {
        /********************************************************
         * Configuracion del la aplicacion del servidor con el cual
         * el contructor se inicia primero para el server.
         */
        this.puerto = puerto;
        /**********************************************
         * Inicializar el valor del servidor de expess*
         **********************************************/
        this.aplicacion = express();
        // var app = require('../routes/indexRoutes')(this.aplicacion);
        //var app2 = app(this.aplicacion);
        //console.log(app);
        /****************************************
         ******Configuracion del servidor********
         ****************************************/
        //Puerto del servidor
        this.aplicacion.set('port', process.env.PORT || 3000);
        //Motor de plantillas
        this.aplicacion.set('view engine', 'ejs');
        this.aplicacion.set('views', path.join(__dirname, 'views'));
        /******************************************************
         * Configurando el middleware**************************
         * Que es el middleware********************************
         * son funciones que se ejecutan antes de las**********
         * peticiones solicitadas
         ******************************************************/
        this.aplicacion.use(morgan('dev'));
        //this.aplicacion.use(chalk);
        /******************************************************
         * configuracion de parametros en el body
         *
         */
        // this.aplicacion.use(routes(this.aplicacion))
        this.aplicacion.use(cors());
        this.aplicacion.use(bodyParser.json()); // support json encoded bodies
        this.aplicacion.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        /*****************CONFIGURACION GLOBAL DE RUTAS*************************************/
        this.aplicacion.use(require('../router/indexRouter'));
    }
    //este es el metodo que se llame para inicializar una vez buena practica
    static init(puerto) {
        return new Server(puerto);
    }
    publicfolder() {
        const publicpath = path.resolve(__dirname, '../public');
        this.aplicacion.use(express.static(publicpath));
    }
    start(callback) {
        //servidor escuchando.
        this.aplicacion.listen(this.puerto, callback);
        this.publicfolder();
    }
}
exports.default = Server;
