import Server from './server/server';
import MySQL from './mysql/mysql';
const routes = require('./routes/indexRoutes')
/*********************************
********Servidor inicializado*****
 *********************************/
const server = Server.init( 3000 );
server.aplicacion.use( routes )

//const myqls = new MySQL();
/*********************************
 * Middleware de index
 * de MYSQL Verifica la conexion.
 */
MySQL.instancia


/*************************
 *******RUTAS*************
 *************************/
//nprequire('./router/router')(server.aplicacion)



server.start(()=>{

    console.log('Server Iniciado');
    

});


/******************
 * la separacion de la rutas con las 
 * se usa una carpeta de controller para la ejecucion de codigo
 * y la carpeta de routes para las rutas solamente.
 */
