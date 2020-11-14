"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
//inicializando el servidor de node
//esta clase se importad por default
var Server = /** @class */ (function () {
    function Server(puerto) {
        this.puerto = puerto;
        this.aplicacion = express();
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
