import { room } from "../db.conn.js";

export const getRooms = async (req, res) => {
  try {
    const allRooms = await room.findAll();
    res.status(200).json(allRooms);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const getRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const roomExists = await room.findByPk(id);
    if (!roomExists) {
      res.status(500).json({ error: "room doesn't exists" });
    } else {
      res.status(200).json(roomExists);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const postRoom = async (req, res) => {
  const { roomNo, roomType, roomPrice } = req.body;
  const roomData = {
    roomNo,
    roomType,
    roomPrice,
  };
  try {
    const roomExists = await room.findOne({
      where: {
        roomNo: roomNo,
      },
    });
    if (roomExists) {
      res.status(500).json({ error: "Room already exists" });
    } else {
      const newRoom = await room.create(roomData);
      res.status(200).json(newRoom);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const putRoom = async (req, res) => {
  const { id } = req.params;
  const { roomNo, roomType, roomPrice } = req.body;
  try {
    const roomExists = await room.findOne({
      where: {
        roomNo: roomNo,
      },
    });
    if (roomExists) {
      const roomEdit = await room.update(
        { roomNo, roomType, roomPrice },
        { where: { roomNo: id } }
      );
      res.status(200).json(`room ${id} edited OK`);
    } else {
      res.status(500).json({ error: "error updating room" });
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const roomExists = await room.findByPk(id);
    if (!roomExists) {
      res.status(500).json({ error: "room doesn't exists" });
    } else {
      const roomEdit = await room.update(
        { deleted: true },
        { where: { roomNo: id } }
      );
      res.status(200).json(`room ${id} deleted OK`);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};
