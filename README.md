# Back-End-Tesi-Indicadores
Para conectarse con mysql importe la base de datos del sistema llamado tesi_indicadoresDB.sql

#Despues
Para demostracion de la conexion esta en modo beta todavia no es dinamico

#Dirijase a la carpeta de src/mysql/mysql.ts 
y en el constructor de la clase modifique
desde la linea 15 a la 18
            host: 'localhost', ------ servidor de mysql local
            user: 'root',------ usuario de mysql
            password: 'sucontraseña', ---- este valor
            database: 'tesi' ------ base de datos no se recomienda cambiar
