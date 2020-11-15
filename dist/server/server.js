"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
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
        this.puerto = puerto;
        this.aplicacion = express();
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
