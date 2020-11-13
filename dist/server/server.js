"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
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
    Server.prototype.start = function (callback) {
        this.aplicacion.listen(this.puerto, callback);
    };
    return Server;
}());
exports.default = Server;
