import { Router } from "express";
import {
  getGuests,
  getGuest,
  postGuest,
  putGuest,
  deleteGuest,
} from "../controllers/guests.js";

const guestsRouter = Router();

guestsRouter.get("/", getGuests);
guestsRouter.get("/:id", getGuest);
guestsRouter.post("/", postGuest);
guestsRouter.put("/:id", putGuest);
guestsRouter.delete("/:id", deleteGuest);

export default guestsRouter;
