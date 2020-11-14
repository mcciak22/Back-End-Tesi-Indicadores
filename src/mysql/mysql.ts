import mysql = require('mysql')

export default class MySQL {
    //esta es una nueva instancia de mysql
    private static _instance: MySQL;

    conexion: mysql.Connection;
    conectado: boolean = false
    /**
     *
     */
    constructor() {
        console.log('Clase inicializada');
        this.conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'tesi'
        });
        //this.conexion.connect();
        this.ConectarDB()

    }


    public static get instancia() {
        return this._instance || (this._instance = new this())

    }

    static EjecutarQuery(query: string, callback: Function) {
        //desde el metodo de la instancia es un get una propiedad que puede alcanzar a toda la clase
        this.instancia.conexion.query(query, (error, results: Object[], fields) => {
            if (error) {
                console.log('Error en el query');
                console.log(error);

                return callback(error);

            }

            if (results.length === 0) {
                callback('El registro solicitado no existe');               
            }
            else{
                callback(null,results);
            }
        });

    }

    private ConectarDB() {
        this.conexion.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;

            } else {
                this.conectado = true;
                console.log('Base de datos Conectado: ' + this.conectado);

            }
        });
    }

}