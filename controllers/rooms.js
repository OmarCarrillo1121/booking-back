export const getRooms = (req, res) => {
  res.json({
    msg: "getRooms",
  });
};

export const getRoom = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "getRoom",
    id,
  });
};

export const postRoom = (req, res) => {
  const { body } = req.body;
  res.json({
    msg: "postRoom",
    body,
  });
};

export const putRoom = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  res.json({
    msg: "putRoom",
    id,
    body,
  });
};

export const deleteRoom = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "deleteRoom",
    id,
  });
};
