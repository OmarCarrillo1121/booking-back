import { Router } from "express";
import {
  getBookings,
  getBooking,
  postBooking,
  putBooking,
  deleteBooking,
} from "../controllers/bookings.js";

const bookingsRouter = Router();

bookingsRouter.get("/", getBookings);
bookingsRouter.get("/:id", getBooking);
bookingsRouter.post("/", postBooking);
bookingsRouter.put("/:id", putBooking);
bookingsRouter.delete("/:id", deleteBooking);

export default bookingsRouter;
