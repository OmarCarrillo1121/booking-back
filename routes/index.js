import { Router } from "express";
import bookings from "./bookings.js";
import rooms from "./rooms.js";
import guests from "./guests.js";

const appRouter = Router();

appRouter.use("/bookings", bookings);
appRouter.use("/rooms", rooms);
appRouter.use("/guests", guests);

export default appRouter;
