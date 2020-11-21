import { Sequelize ,  DataTypes , Model, Optional} from 'sequelize'
import { sequelize } from '../instances/sequelize'

export interface UserAddModel {
    email: string
    password: string
}

export interface UserModel extends Model<UserModel> {
    id: number
    email: string
    password: string
    createdAt: string
    updatedAt: string
}

export interface UserViewModel {
    id: number
    email: string
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