import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

/*********************************
********Servidor inicializado*****
 *********************************/
const server = Server.init( 3000 );
server.aplicacion.use( router )

//const myqls = new MySQL();
MySQL.instancia

server.start(()=>{

    console.log('Server Iniciado');
    

});
