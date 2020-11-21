import jwt = require('jsonwebtoken');
import moment = require('moment');

export default class JWT{
   
    constructor() {
     
    }

    public static GenetarToken(user:any): string{
        // console.log(user[0]);
        
        let payload = {
            id: user[0].id_usuario,
            Email: user[0].Email,
            Nombre: user[0].Nombre,
            Apellidos: user[0].Apellidos,
            Rol: user[0].Rol,
            iat: moment().unix(),
            exp: moment().add(14, "days").unix(),
          };
          return jwt.sign(payload, process.env.TOKEN_SECRET || 'no hay nada');
    }
}

