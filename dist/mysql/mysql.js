"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MySQL = /** @class */ (function () {
    /**
     *
     */
    function MySQL() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'tesi'
        });
        //this.conexion.connect();
        this.ConectarDB();
    }
    Object.defineProperty(MySQL, "instancia", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    MySQL.EjecutarQuery = function (query, callback) {
        //desde el metodo de la instancia es un get una propiedad que puede alcanzar a toda la clase
        this.instancia.conexion.query(query, function (error, results, fields) {
            if (error) {
                console.log('Error en el query');
                console.log(error);
                return callback(error);
            }
            if (results.length === 0) {
                console.log('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    };
    MySQL.prototype.ConectarDB = function () {
        var _this = this;
        this.conexion.connect(function (err) {
            if (err) {
                console.log(err.message);
                return;
            }
            else {
                _this.conectado = true;
                console.log('Base de datos Conectado: ' + _this.conectado);
            }
        });
    };
    return MySQL;
}());
exports.default = MySQL;
