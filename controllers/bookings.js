export const getBookings = (req, res) => {
  res.json({
    msg: "getBookings",
  });
};

export const getBooking = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "getBooking",
    id,
  });
};

export const postBooking = (req, res) => {
  const { body } = req.body;
  res.json({
    msg: "postBooking",
    body,
  });
};

export const putBooking = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  res.json({
    msg: "putBooking",
    id,
    body,
  });
};

export const deleteBooking = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "deleteBooking",
    id,
  });
};
