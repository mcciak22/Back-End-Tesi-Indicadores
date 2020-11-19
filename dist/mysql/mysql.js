"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
require('dotenv').config();
class MySQL {
    /**
     *
     */
    constructor() {
        this.conectado = false;
        //console.log('Clase inicializada MYSQL');
        this.conexion = mysql.createConnection({
            host: process.env.DATA_DB_HOST,
            user: process.env.DATA_DB_USER,
            password: process.env.DATA_DB_PASS,
            database: process.env.DATA_DB_NAME
        });
        //this.conexion.connect();
        this.ConectarDB();
    }
    static get instancia() {
        return this._instance || (this._instance = new this());
    }
    static EjecutarQuery(query, callback) {
        //desde el metodo de la instancia es un get una propiedad que puede alcanzar a toda la clase
        this.instancia.conexion.query(query, (error, results, fields) => {
            if (error) {
                console.log('Error en el query');
                console.log(error);
                return callback(error);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    ConectarDB() {
        this.conexion.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            else {
                this.conectado = true;
                console.log('Base de datos Conectado: ' + this.conectado);
            }
        });
    }
}
exports.default = MySQL;
