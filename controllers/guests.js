export const getGuests = (req, res) => {
  res.json({
    msg: "getGuests",
  });
};

export const getGuest = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "getGuest",
    id,
  });
};

export const postGuest = (req, res) => {
  const { body } = req.body;
  res.json({
    msg: "postGuest",
    body,
  });
};

export const putGuest = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  res.json({
    msg: "putGuest",
    id,
    body,
  });
};

export const deleteGuest = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "deleteGuest",
    id,
  });
};
