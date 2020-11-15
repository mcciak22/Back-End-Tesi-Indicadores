# Back-End-Tesi-Indicadores
Para conectarse con mysql importe la base de datos del sistema llamado tesi_indicadoresDB.sql

## Para configurar el servidor de Node.
Proceda a dirigirse ala carpeta raiz del proyecto y abra el archivo .env para configurar el servidor de la conexion de la base de datos.

## Configuracion
Una vez configurado correctamente el .env proceda al siguiente paso.

## NPM
Para correr la aplicacion correctamente el primer comando a realizar es:
`npm install` este comando instala todo los modulos si faltan de instalarse en Node.

## Build Compilacion
Para compilar el programa es necesaria primeramente correr el comando:
`npm run build`.

## Ultimo paso
Una vez compilado corretamente la aplicacion proceda al comando
`npm run install`
para iniciar el servidor de la api.

## APIS

GET `api/usuarios` trae la lista de usuarios.
GET `api/usuario/(id)` trae al usurio especifico por id de usuario
DELETE `api/usuario/(id)` elimina al usuario especifico por id de usuario
POST `api/usuario` inserta un registro de usuario nuevo.