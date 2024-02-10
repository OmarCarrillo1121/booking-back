import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log(`Booking-back server listening on port ${port}`);
});
