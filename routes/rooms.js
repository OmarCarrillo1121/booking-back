import { Router } from "express";
import {
  getRooms,
  getRoom,
  postRoom,
  putRoom,
  deleteRoom,
} from "../controllers/rooms.js";

const roomsRouter = Router();

roomsRouter.get("/", getRooms);
roomsRouter.get("/:id", getRoom);
roomsRouter.post("/", postRoom);
roomsRouter.put("/:id", putRoom);
roomsRouter.delete("/:id", deleteRoom);

export default roomsRouter;
