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
            password: 'password1',
            database: 'tesi'
        });
        //this.conexion.connect();
        this.ConectarDB();
    }
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
