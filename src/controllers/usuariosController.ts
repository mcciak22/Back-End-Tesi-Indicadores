import { Request, Response } from "express";
import MySQL from "../mysql/mysql";
import moment = require("moment");
import bcrypt = require("bcrypt");
/******************los modulos ya no se exportan se crean como instancias de clases.******************/
export default class Usuarios {
  /**
   *
   */
  constructor() {}

  public static AllUsuarios(req: Request, res: Response) {
    const query = `
    SELECT 
    id_usuario,
    Email,
    Nombre,
    Apellidos,
    Email,
    Rol,
    Foto,
    Carrera
    FROM usuarios`;

    MySQL.EjecutarQuery(query, (error: any, usuarios: Object[]) => {
      if (error) {
        res.status(400).json({
          ok: false,
          errorms: error,
        });
      } else {
        res.json({
          ok: true,
          usuarios: usuarios,
        });
      }
    });
  }

  public static OneUsuario(req: Request, res: Response) {
    //este es el parametro que se consulta desde la url
    const id = req.params.id;
    const escaparcaracteres = MySQL.instancia.conexion.escape(id);
    // res.json({
    //     ok:true,
    //     mensaje:'todo esta bien api',
    //     id: id
    // })

    const query = `
    SELECT *
    FROM usuarios
    WHERE id_usuario = ${escaparcaracteres}`;

    MySQL.EjecutarQuery(query, (error: any, usuario: Object[]) => {
      if (error) {
        res.status(400).json({
          ok: false,
          errorms: error,
        });
      } else {
        res.json({
          ok: true,
          usuario: usuario[0],
        });
      }
    });
  }

  public static insertarUsuario(req: Request, res: Response) {
    let pass = this.hashPassword(req.body.Contraseña);
    const body = {
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

    const queryinsetar = `
    INSERT 
    INTO usuarios 
    (Nombre, 
     Apellidos, 
     Email, 
     Rol, 
     Contraseña, 
     Foto, 
     Carrera, 
     Fecha_de_Creacion, 
     Fecha_de_Actualizacion) 
     VALUES 
     ('${body.Nombre}',
     '${body.Apellidos}',
     '${body.Email}',
     '${body.Rol}',
     '${body.Contraseña}',
     '${body.Foto}',
     '${body.Carrera}',
     '${body.Fecha_de_Creacion}',
     '${body.Fecha_de_Actualizacion}')`;

    MySQL.EjecutarQuery(queryinsetar, (error: any, usuario: Object) => {
      if (error) {
        res.status(400).json({
          ok: false,
          errorms: error,
        });
      } else {
        res.status(200).json({
          ok: true,
        });
      }
    });
  }

  public static eliminarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    //console.log(id);

    const queryeliminar = `
        DELETE 
        FROM   tesi.usuarios 
        WHERE (id_usuario = ${id});
        `;
    MySQL.EjecutarQuery(queryeliminar, (error: any, usuario: Object[]) => {
      if (error) {
        res.status(400).json({
          ok: false,
          errorms: error,
        });
      } else {
        res.status(200).json({
          ok: true,
        });
      }
    });
  }

  public static actualizarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    const objbody = req.body;
    const Fecha_de_Actualizacion = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const queryactualizar = `
        UPDATE usuarios 
        SET 
        Nombre = '${objbody.Nombre}', 
        Apellidos = '${objbody.Apellidos}', 
        Rol = '${objbody.Rol}', 
        Foto = '${objbody.Foto}', 
        Carrera = '${objbody.Carrera}' 
        Fecha_de_Actualizacion = '${Fecha_de_Actualizacion}'
        WHERE (id_usuario = '${id}' );
        `;
    MySQL.EjecutarQuery(queryactualizar, (error: any, usuario: Object[]) => {
      if (error) {
        res.status(400).json({
          ok: false,
          errorms: error,
        });
      } else {
        res.status(200).json({
          ok: true,
        });
      }
    });
  }

  public static actualizarContraseña(req: Request, res: Response) {
    const id = req.params.id;
    const objbody = req.body.Contraseña;

    const queryactualizarcontraseña = `
        UPDATE usuarios 
        SET Contraseña = '${objbody}' 
        WHERE (id_usuario = '${id}' );
        `;
  }

  private static hashPassword(passwordtxt: string) {
    return bcrypt.hashSync(passwordtxt, 10);
  }

  // public static Auth(req: Request, res: Response){
  //     const body = {
  //         Username: req.body.Username,
  //         //Password: bcrypt.compareSync(req.body.password, existingItem.password)

  //     }

  // }
}
