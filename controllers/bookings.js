import { booking, guest, room } from "../db.conn.js";

export const getBookings = async (req, res) => {
  try {
    const allBookings = await booking.findAll();
    res.status(200).json(allBookings);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const getBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const bookingExists = await booking.findByPk(id);
    if (!bookingExists) {
      res.status(500).json({ error: "booking doesn't exists" });
    } else {
      res.status(200).json(bookingExists);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const postBooking = async (req, res) => {
  const { bookingDate, roomNo, guestId } = req.body;
  const bookingData = {
    bookingDate,
  };
  try {
    if (!roomNo || !guestId) {
      res.status(500).json({ error: "data missing" });
    } else {
      const newBooking = await booking.create(bookingData);
      await newBooking.setRoom(roomNo);
      await newBooking.setGuest(guestId);
      res.status(200).json(newBooking);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const putCheckIn = async (req, res) => {
  const { id } = req.params;
  const { checkIn } = req.body;
  try {
    const bookingExists = await booking.findByPk(id);
    if (!bookingExists) {
      res.status(500).json({ error: "booking doesn't exists" });
    } else {
      const updateCheckIn = await booking.update(
        { checkIn },
        { where: { id } }
      );
      res.status(200).json("checkIn registered OK");
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const putCheckOut = async (req, res) => {
  const { id } = req.params;
  const { checkOut } = req.body;
  try {
    const bookingExists = await booking.findByPk(id);
    if (!bookingExists) {
      res.status(500).json({ error: "booking doesn't exists" });
    } else {
      const updateCheckOut = await booking.update(
        { checkOut },
        { where: { id } }
      );
      res.status(200).json("checkOut registered OK");
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const bookingExists = await booking.findByPk(id);
    if (!bookingExists) {
      res.status(500).json({ error: "booking doesn't exists" });
    } else {
      const bookingDelete = await booking.update(
        { deleted: true },
        { where: { id } }
      );
      res.status(200).json(`booking ${id} deleted OK`);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};
