import mysql = require('mysql')

export default class MySQL{
    private static _intancia: MySQL;
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