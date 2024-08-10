const getNotes = (req, res) => {
  res.json("getNotes");
};

const createNotes = (req, res) => {
  res.json("createNotes");
};

export { createNotes, getNotes };
