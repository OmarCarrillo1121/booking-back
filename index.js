import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./db.conn.js";

dotenv.config();
const port = process.env.PORT || "3001";

try {
  await sequelize.sync({ alter: true });
  console.log("Connection to DB established");
} catch (error) {
  console.error("Error connection to DB");
}

app.listen(port, () => {
  console.log(`Booking-back server listening on port ${port}`);
});
