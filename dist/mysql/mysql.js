"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class MySQL {
    constructor() {
        this.conectado = false;
        // console.log('Clase inicializada MYSQL');
        this.conexion = mysql_1.default.createConnection({
            host: process.env.DATA_DB_HOST,
            user: process.env.DATA_DB_USER,
            password: process.env.DATA_DB_PASS,
            database: process.env.DATA_DB_NAME,
            port: Number.parseInt(process.env.DATA_DB_PORT)
        });
        this.ConectarDB();
    }
    static get instancia() {
        const status = this.instance || (this.instance = new this());
        return status;
    }
    static EjecutarQuery(query, callback) {
        //desde el metodo de la instancia es un get una propiedad que puede alcanzar a toda la clase
        this.instancia.conexion.query(query, (error, results, fields) => {
            if (error) {
                //console.log('Error en el query');
                //console.log(error);
                return callback(error);
                //callback(error);
            }
            if (results.length === 0) {
                callback(results);
            }
            else {
                callback(null, results);
            }
        });
    }
    ConectarDB() {
        this.conexion.connect((err) => {
            if (err) {
                this.conectado = false;
                console.log(err.message);
                console.log(`Estado de la Base de datos: ${this.conectado}`);
                //return err;
            }
            else {
                this.conectado = true;
                console.log(`Estado de la Base de datos: ${this.conectado}`);
            }
        });
    }
}
exports.default = MySQL;
