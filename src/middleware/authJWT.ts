import jwt from 'jsonwebtoken';
import moment from 'moment';
import { UserModel } from '../models/usuarioModel';

export default class JWT {
  public static GenetarToken(user: UserModel): string {
    // console.log(user);

    const payload = {
      id: user.id_Usuario,
      Email: user.Email,
      Nombre: user.Nombre,
      Apellidos: user.Apellidos,
      Rol: user.Rol,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix(),
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET || 'no hay nada');
  }
}
