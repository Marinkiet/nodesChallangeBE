const Note = require('../models/noteModel');

// Create a new note
exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = new Note({
      title,
      description,
      userId: req.user.id,  // Attach the logged-in user's ID
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch notes for the logged-in user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
