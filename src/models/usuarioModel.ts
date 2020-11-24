import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../instances/sequelize";

export interface UserAddModel {
  Email: string;
  Contraseña: string;
}

export interface UserModel extends Model<UserModel> {
  id_usuario: number;
  Nombre: string;
  Apellidos: string;
  Email: string;
  Rol: string;
  Contraseña: string;
  Carrera: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserViewModel {
  id_usuario: number;
  Email: string;
}

// export const User = sequelize.define<UserModel>('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     email:
//         DataTypes.STRING
//     ,
//     password: DataTypes.STRING
// })
