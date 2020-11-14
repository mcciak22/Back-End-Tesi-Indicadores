import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init( 3000 );
server.aplicacion.use( router )

const myqls = new MySQL();

server.start(()=>{

    console.log('Server Iniciado');
    

});
