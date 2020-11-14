"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var router = express_1.Router();
router.get('/heroes', function (req, res) {
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
router.get('/heroes/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'todo esta bien api',
        id: id
    });
});
exports.default = router;
