import Server from './server/server';
import MySQL from './mysql/mysql';
//const usuariosrutas = require('./router/usuarioRoute')
/*********************************
********Servidor inicializado*****
 *********************************/
const server = Server.init( 3000 );

//const myqls = new MySQL();
/*********************************
 * Middleware de index
 * de MYSQL Verifica la conexion.
 */
MySQL.instancia


/*************************
 *******RUTAS*************
 *************************/
//require('./router/router')
//server.aplicacion.use( usuariosrutas )



server.start(()=>{

    console.log('Server Iniciado');
    

});


/******************
 * la separacion de la rutas con las 
 * se usa una carpeta de controller para la ejecucion de codigo
 * y la carpeta de routes para las rutas solamente.
 */
