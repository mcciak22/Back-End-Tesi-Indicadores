"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var mysql_1 = __importDefault(require("./mysql/mysql"));
//const usuariosrutas = require('./router/usuarioRoute')
/*********************************
********Servidor inicializado*****
 *********************************/
var server = server_1.default.init(3000);
//const myqls = new MySQL();
/*********************************
 * Middleware de index
 * de MYSQL Verifica la conexion.
 */
mysql_1.default.instancia;
/*************************
 *******RUTAS*************
 *************************/
//require('./router/router')
//server.aplicacion.use( usuariosrutas )
server.start(function () {
    console.log('Server Iniciado');
});
/******************
 * la separacion de la rutas con las
 * se usa una carpeta de controller para la ejecucion de codigo
 * y la carpeta de routes para las rutas solamente.
 */
