"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
//inicializando el servidor de node
//esta clase se importad por default
var Server = /** @class */ (function () {
    function Server(
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
        /******************************************************
         * configuracion de parametros en el body
         *
         */
        // this.aplicacion.use(routes(this.aplicacion))
        this.aplicacion.use(cors());
        this.aplicacion.use(bodyParser.json()); // support json encoded bodies
        this.aplicacion.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    }
    //este es el metodo que se llame para inicializar una vez buena practica
    Server.init = function (puerto) {
        return new Server(puerto);
    };
    Server.prototype.publicfolder = function () {
        var publicpath = path.resolve(__dirname, '../public');
        this.aplicacion.use(express.static(publicpath));
    };
    Server.prototype.start = function (callback) {
        //servidor escuchando.
        this.aplicacion.listen(this.puerto, callback);
        this.publicfolder();
    };
    return Server;
}());
exports.default = Server;
