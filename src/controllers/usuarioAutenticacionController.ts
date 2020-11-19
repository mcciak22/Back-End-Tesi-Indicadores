import { Request, Response } from 'express';
import MySQL from '../mysql/mysql';
import moment = require('moment');
import bcrypt = require("bcrypt");

export default class UsuarioAutenticacion {


    constructor() {


    }

    public static Autenticacion(req: Request, res: Response) {

        res.json({
            ok: true
        })

    }
}