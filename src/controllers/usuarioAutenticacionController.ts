import { Request, Response } from "express";
import MySQL from "../mysql/mysql";
import JWT from '../middleware/authJWT';
import moment = require("moment");
import bcrypt = require("bcrypt");

export default class UsuarioAutenticacion {
  constructor() {}

  public static Autenticacion(req: Request, res: Response) {
    const body = {
      Email: req.body.Email,
      Password: req.body.Password,
    };

    const queryconsulta = `
        SELECT        
        id_usuario,
        Email,
        Nombre,
        Apellidos,
        Email,
        Rol,
        Foto,
        Carrera
        FROM tesi.usuarios
        WHERE Email = '${body.Email}'
        `;
    MySQL.EjecutarQuery(queryconsulta, (error: any, usuario: Object[]) => {
      if (error) {
        res.status(400).json({
          ok: false,
          error: "El usuario no Existe",
          //message: error
        });
      } else {
        const querylogin = `
                SELECT                
                Contraseña
                FROM tesi.usuarios
                WHERE Email = '${body.Email}'

                `;
        MySQL.EjecutarQuery(querylogin, (error: any, password: Object[]) => {
          let contraseña = JSON.stringify(password);
          let json = JSON.parse(contraseña);

          let contraseña2 = bcrypt.compareSync(
            req.body.Password,
            json[0].Contraseña
          );
          if (contraseña2 === false) {
            res.status(400).json({
              ok: false,
              error: "La contraseña es Incorrecta",
              //message: error
            });
          } else {
            
            let user = JSON.stringify(usuario);
            let json = JSON.parse(user);
            let token = JWT.GenetarToken(json)
            res.status(200).json({
              ok: true,
              Token: token,
            });
          }
          //
          // res.status(200).json({
          //     ok: true,
          //     usuario:usuario[0]
          // })
        });
      }
    });
  }
}
