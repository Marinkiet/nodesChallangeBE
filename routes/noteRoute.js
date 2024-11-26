const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware')
const { createNote, getNotes } = require('../controllers/noteController');

const router = express.Router();

// Create a note
router.post('/note', authenticateToken, createNote);

// Fetch notes
router.get('/note', authenticateToken, getNotes);

module.exports = router;

// const express = require('express');
// const Note = require('../models/noteModel');
// const { authenticateToken } = require('../middleware/authMiddleware')
// const router = express.Router();

// // Create Note Route
// router.post('/note', authenticateToken, async (req, res) => {
//     const { title, description } = req.body;  // Use description instead of content
  
//     try {
//       // Create new note
//       const note = new Note({
//         title,
//         description,  // Ensure the same field name is used
//         userId: req.user.id,  // Attach the logged-in user's ID
//       });
//       await note.save();
  
//       res.status(201).json(note);
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

// // Fetch Notes Route
// router.get('/note', authenticateToken, async (req, res) => {  // Adjust path here
//     try {
//       // Fetch notes for the logged-in user
//       const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
//       res.json(notes);
//     } catch (error) {
//       console.error('Error fetching notes:', error);  // Log for debugging
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

// module.exports = router;
