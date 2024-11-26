const express = require('express');
const {authenticateToken} = require('../middleware/authMiddleware');
const {createList,getLists,addNoteToList} = require('../controllers/listController');

const router = express.Router();

//Create a new list
router.post('/list',authenticateToken,createList);

//Get all lists for the user with the notes counted
router.get('/list',authenticateToken,getLists);

//Add a note to a specific list
router.post('/lists/:listId/notes',authenticateToken,addNoteToList);

module.exports = router;