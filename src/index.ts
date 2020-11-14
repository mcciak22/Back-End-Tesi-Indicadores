import Server from './server/server';
import router from './router/router';

const server = Server.init( 3000 );
server.aplicacion.use( router )

server.start(()=>{

    console.log('Server Iniciado');
    

});
