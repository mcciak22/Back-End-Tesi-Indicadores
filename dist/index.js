"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var router_1 = __importDefault(require("./router/router"));
var mysql_1 = __importDefault(require("./mysql/mysql"));
/*********************************
********Servidor inicializado*****
 *********************************/
var server = server_1.default.init(3000);
server.aplicacion.use(router_1.default);
//const myqls = new MySQL();
/*********************************
 * Middleware de index
 * de MYSQL Verifica la conexion.
 */
mysql_1.default.instancia;
/*************************
 *******RUTAS*************
 * ***********************/
server.start(function () {
    console.log('Server Iniciado');
});
