import { guest } from "../db.conn.js";

export const getGuests = async (req, res) => {
  try {
    const allGuests = await guest.findAll();
    res.status(200).json(allGuests);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const getGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const guestExists = await guest.findByPk(id);
    if (!guestExists) {
      res.status(500).json({ error: "guest doesn't exists" });
    } else {
      res.status(200).json(guestExists);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const postGuest = async (req, res) => {
  const { username, email, password } = req.body;
  const guestData = {
    username,
    email,
    password,
  };
  try {
    const guestExists = await guest.findOne({
      where: {
        email: email,
      },
    });
    if (guestExists) {
      res.status(500).json({ error: "Guest already exists" });
    } else {
      const newGuest = await guest.create(guestData);
      res.status(200).json(newGuest);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const putGuest = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const guestExists = await guest.findOne({
      where: { id },
    });
    if (guestExists) {
      const guestEdit = await guest.update(
        { username, email, password },
        { where: { id } }
      );
      res.status(200).json(`guest ${username} edited OK`);
    } else {
      res.status(500).json({ error: "error updating guest" });
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};

export const deleteGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const guestExists = await guest.findByPk(id);
    if (!guestExists) {
      res.status(500).json({ error: "guest doesn't exists" });
    } else {
      const guestDelete = await guest.update(
        { deleted: true },
        { where: { id } }
      );
      res.status(200).json(`guest ${id} deleted OK`);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
};
