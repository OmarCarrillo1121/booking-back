import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelizeConn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  //logging: false
});

export default sequelizeConn;
