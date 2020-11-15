import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

/*********************************
********Servidor inicializado*****
 *********************************/
const server = Server.init( 3000 );
server.aplicacion.use( router )

//const myqls = new MySQL();
/*********************************
 * Middleware de index
 * de MYSQL Verifica la conexion.
 */
MySQL.instancia


/*************************
 *******RUTAS*************
 * ***********************/

server.start(()=>{

    console.log('Server Iniciado');
    

});
