import express from 'express';
import morgan from 'morgan';
//import chalk = require('chalk');
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
//import {router} from '../router/indexRouter';

//inicializando el servidor de node
//esta clase se importad por default
export default class Server {
  /********************************************************
   * Propiedades de la clase Server con la cual en el index.ts
   * ejecuta el servidor con la funcion init.
   ********************************************************/
  public aplicacion: express.Application;
  public puerto: number;

  constructor(
    /********************************************
     * puerto al momento de instanciar la clase servidor
     * requiere como el numero del puerto donde iniciara
     *  el servidor
     ********************************************/
    puerto: number
  ) {
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
    this.aplicacion.set('port', process.env.APP_PORT || 3000);
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
    //this.aplicacion.use(router);
  }

  //este es el metodo que se llame para inicializar una vez buena practica
  public static init(puerto: number): Server {
    return new Server(puerto);
  }

  private publicfolder() {
    const publicpath = path.resolve(__dirname, '../public');
    this.aplicacion.use(express.static(publicpath));
  }

  public start(callback: any): void {
    //servidor escuchando.
    this.aplicacion.listen(this.puerto, callback);
    this.publicfolder();
  }
}
