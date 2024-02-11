import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { modelBooking } from "./models/booking.js";
import { modelRoom } from "./models/room.js";
import { modelGuest } from "./models/guest.js";

dotenv.config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  //logging: false
});

const modelDefiners = [modelBooking, modelGuest, modelRoom];
modelDefiners.forEach((model) => model(sequelize));

export default sequelize;
