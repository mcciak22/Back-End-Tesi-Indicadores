import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export default class MySQL {
  //esta es una nueva instancia de mysql
  private static instance: MySQL;

  conexion: mysql.Connection;

  private conectado = false;

  constructor() {
    // console.log('Clase inicializada MYSQL');
    this.conexion = mysql.createConnection({
      host: process.env.DATA_DB_HOST,
      user: process.env.DATA_DB_USER,
      password: process.env.DATA_DB_PASS,
      database: process.env.DATA_DB_NAME,
      port: Number.parseInt(process.env.DATA_DB_PORT!)
    });

    this.ConectarDB();
  }

  public static get instancia(): MySQL {
    const status = this.instance || (this.instance = new this());
    return status;
  }

  public static EjecutarQuery(query: string, callback: Function): any {
    //desde el metodo de la instancia es un get una propiedad que puede alcanzar a toda la clase
    this.instancia.conexion.query(query, (error, results: any, fields: any) => {
      if (error) {
        //console.log('Error en el query');
        //console.log(error);

        return callback(error);
        //callback(error);
      }

      if (results.length === 0) {
        callback(results);
      } else {
        callback(null, results);
      }
    });
  }

  private ConectarDB() {
    this.conexion.connect((err: mysql.MysqlError) => {
      if (err) {
        this.conectado = false;
        console.log(err.message);
        console.log(`Estado de la Base de datos: ${this.conectado}`);
        //return err;
      } else {
        this.conectado = true;
        console.log(`Estado de la Base de datos: ${this.conectado}`);
      }
    });
  }
}
