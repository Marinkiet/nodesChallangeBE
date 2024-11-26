const List = require('../models/listModel');

//Create a list 
exports.createList = async (req, res) => {
    const { name, color } = req.body;
    try {
        const newList = new List({
            name,
            color: color || 'rgb(255, 107, 107)',
            userId: req.user.id,
        });
        await newList.save();
        res.status(201).json(newList);

    } catch (error) {
        console.log('Controller createList: Error creating list', error);
        res.status(500).json({ message: 'Ctrlr Error creating list' })
    }
}

//Fetch all the lists for the loggedin user with the notes total
exports.getLists = async (req, res) => {
    const userId = req.user.id;

    try {
        const lists = await List.find({ userId: req.user.id })
            .populate('notes')  // Assuming notes are referenced in List
            .sort({ createdAt: -1 });
        res.status(200).json(lists);

    } catch (error) {
        console.log('Controller fetchLists: Error fetching lists', error);
        res.status(500).json({ message: 'Ctrlr Error fetching list' })
    }
}

//Add note to a list

exports.addNoteToList = async (req, res) => {
    const { listId } = req.params;
    const { noteId } = req.body;
    try {
        const list = await List.findById(listId);
        if (!list) return res.status(404).json({ message: 'List not found' });

        list.notes.push(noteId);
        await list.save();

        res.status(200).json(list);

    } catch (error) {
        console.log('Controller fetchLists: Error adding note to lists', error);
        res.status(500).json({ message: 'Ctrlr Error adding note to list' })
    }
}