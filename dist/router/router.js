"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var moment = require("moment");
var bcrypt = require("bcrypt");
var router = express_1.Router();
//ruta para Api de Consultar todos los usuarios.
router.get('/usuarios', function (req, res) {
    var query = "\n    SELECT *\n    FROM usuarios";
    mysql_1.default.EjecutarQuery(query, function (error, usuarios) {
        if (error) {
            res.status(400).json({
                ok: false,
                errorms: error
            });
        }
        else {
            res.json({
                ok: true,
                usuarios: usuarios
            });
        }
    });
    // res.json({
    //     ok:true,
    //     mensaje:'todo esta bien api'
    // })
});
//API para consultar los datos de usuarios por id
router.get('/usuario/:id', function (req, res) {
    //este es el parametro que se consulta desde la url
    var id = req.params.id;
    var escaparcaracteres = mysql_1.default.instancia.conexion.escape(id);
    // res.json({
    //     ok:true,
    //     mensaje:'todo esta bien api',
    //     id: id
    // })
    var query = "\n    SELECT *\n    FROM usuarios\n    WHERE id_usuario = " + escaparcaracteres;
    mysql_1.default.EjecutarQuery(query, function (error, usuario) {
        if (error) {
            res.status(400).json({
                ok: false,
                errorms: error
            });
        }
        else {
            res.json({
                ok: true,
                usuario: usuario[0]
            });
        }
    });
})
    .post('/usuario', function (req, res) {
    var pass = hashPassword(req.body.Contraseña);
    var body = {
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Email: req.body.Email,
        Rol: req.body.Rol,
        Contraseña: pass,
        Foto: req.body.Foto,
        Carrera: req.body.Carrera,
        Fecha_de_Creacion: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        Fecha_de_Actualizacion: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    };
    var queryinsetar = "INSERT INTO tesi.usuarios (Nombre, Apellidos, Email, Rol, Contrase\u00F1a, Foto, Carrera, Fecha_de_Creacion, Fecha_de_Actualizacion) VALUES ('" + body.Nombre + "','" + body.Apellidos + "','" + body.Email + "','" + body.Rol + "','" + body.Contraseña + "','" + body.Foto + "','" + body.Carrera + "','" + body.Fecha_de_Creacion + "','" + body.Fecha_de_Actualizacion + "')";
    mysql_1.default.EjecutarQuery(queryinsetar, function (error, usuario) {
        if (error) {
            res.status(400).json({
                ok: false,
                errorms: error
            });
        }
        else {
            res.status(200).json({
                ok: true
            });
        }
    });
})
    .delete('./usuario?id=:id', function (req, res) {
    var id = req.params.id.valueOf();
    console.log(id);
    var queryeliminar = "\n        DELETE \n        FROM   tesi.usuarios \n        WHERE (id_usuario = " + id + ");\n        ";
    mysql_1.default.EjecutarQuery(queryeliminar, function (error, usuario) {
        if (error) {
            res.status(400).json({
                ok: false,
                errorms: error
            });
        }
        else {
            res.status(200).json({
                ok: true
            });
        }
    });
});
function hashPassword(passwordtxt) {
    return bcrypt.hashSync(passwordtxt, 10);
}
exports.default = router;
