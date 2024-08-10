const getNotes = (req, res) => {
  res.json("getNotes");
};

const createNotes = (req, res) => {
  res.json("createNotes");
};

const getNotesById = (req, res) => {
  res.json("getNotesById");
};

const updateNotes = (req, res) => {
  res.json("updateNotes");
};

const deleteNotes = (req, res) => {
  res.json("deleteNotes");
};

export { createNotes, getNotes, getNotesById, updateNotes, deleteNotes };
