"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//import chalk = require('chalk');
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const indexRouter_1 = __importDefault(require("../router/indexRouter"));
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
        this.aplicacion = express_1.default();
        // var app = require('../routes/indexRoutes')(this.aplicacion);
        //var app2 = app(this.aplicacion);
        //console.log(app);
        /****************************************
         ******Configuracion del servidor********
         ****************************************/
        //Puerto del servidor
        this.aplicacion.set('port', process.env.APP_PORT || 3000);
        //Motor de plantillas
        this.aplicacion.set('view engine', 'ejs');
        this.aplicacion.set('views', path_1.default.join(__dirname, 'views'));
        /******************************************************
         * Configurando el middleware**************************
         * Que es el middleware********************************
         * son funciones que se ejecutan antes de las**********
         * peticiones solicitadas
         ******************************************************/
        this.aplicacion.use(morgan_1.default('dev'));
        //this.aplicacion.use(chalk);
        /******************************************************
         * configuracion de parametros en el body
         *
         */
        // this.aplicacion.use(routes(this.aplicacion))
        this.aplicacion.use(cors_1.default());
        this.aplicacion.use(body_parser_1.default.json()); // support json encoded bodies
        this.aplicacion.use(body_parser_1.default.urlencoded({ extended: true })); // support encoded bodies
        /*****************CONFIGURACION GLOBAL DE RUTAS*************************************/
        this.aplicacion.use(indexRouter_1.default);
    }
    //este es el metodo que se llame para inicializar una vez buena practica
    static init(puerto) {
        return new Server(puerto);
    }
    publicfolder() {
        const publicpath = path_1.default.resolve(__dirname, '../public');
        this.aplicacion.use(express_1.default.static(publicpath));
    }
    start(callback) {
        //servidor escuchando.
        this.aplicacion.listen(this.puerto, callback);
        this.publicfolder();
    }
}
exports.default = Server;
