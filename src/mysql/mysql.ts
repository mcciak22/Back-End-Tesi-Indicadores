import mysql = require('mysql')

export default class MySQL{
    //esta es una nueva instancia de mysql
    private static _instance: MySQL;

    conexion: mysql.Connection;
    conectado : boolean = false
    /**
     *
     */
    constructor() {
        console.log('Clase inicializada');
        this.conexion = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'tesi'
          });
        //this.conexion.connect();
        this.ConectarDB()
        
    }


    public static get instancia(){
        return this._instance || ( this._instance = new this() )

    }

    private ConectarDB(){
        this.conexion.connect((err:mysql.MysqlError)=>{
            if(err){
                console.log(err.message);
                return;
                
            }else{
                this.conectado = true;
                console.log('Base de datos Conectado: ' + this.conectado);
                
            }
        });
    }

}