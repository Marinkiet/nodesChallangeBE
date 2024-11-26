const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "rgb(102, 217, 232)",
  },
  notes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Note'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const List = mongoose.model('List', NoteSchema);
module.exports = List;
