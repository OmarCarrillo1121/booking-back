import { Router } from "express";
import {
  getBookings,
  getBooking,
  postBooking,
  putCheckIn,
  putCheckOut,
  deleteBooking,
} from "../controllers/bookings.js";

const bookingsRouter = Router();

bookingsRouter.get("/", getBookings);
bookingsRouter.get("/:id", getBooking);
bookingsRouter.post("/", postBooking);
bookingsRouter.put("/checkin/:id", putCheckIn);
bookingsRouter.put("/checkout/:id", putCheckOut);
bookingsRouter.delete("/:id", deleteBooking);

export default bookingsRouter;
