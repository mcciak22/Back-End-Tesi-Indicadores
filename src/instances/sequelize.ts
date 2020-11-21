import { Sequelize } from "sequelize";

const db = process.env.DATA_DB_NAME || "";
const username = process.env.DATA_DB_USER || "";
const password = process.env.DATA_DB_PASS || "";

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();
