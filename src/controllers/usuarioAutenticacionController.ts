import { Request, Response } from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import MySQL from '../mysql/mysql';
import JWT from '../middleware/authJWT';

export default class UsuarioAutenticacion {
  public static Autenticacion(req: Request, res: Response): void {
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
    MySQL.EjecutarQuery(queryconsulta, (error: any, usuario: any[]) => {
      if (error) {
        res.status(401).json({
          ok: false,
          error: 'El usuario no Existe',
          //message: error
        });
      } else {
        const querylogin = `
                SELECT                
                Contraseña
                FROM tesi.usuarios
                WHERE Email = '${body.Email}'

                `;
        MySQL.EjecutarQuery(querylogin, (err: mysql.MysqlError, password: string[]) => {
          const contraseña = JSON.stringify(password);
          const json = JSON.parse(contraseña);

          const contraseña2 = bcrypt.compareSync(
            req.body.Password,
            json[0].Contraseña
          );
          if (contraseña2 === false) {
            res.status(401).json({
              ok: false,
              error: 'La contraseña es Incorrecta',
              //message: error
            });
          } else {
            const user = JSON.stringify(usuario);
            const serial = JSON.parse(user);
            const token = JWT.GenetarToken(serial[0]);
            res.status(200).json({
              ok: true,
              Token: token,
            });
          }
        });
      }
    });
  }
}
