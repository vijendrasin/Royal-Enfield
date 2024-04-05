const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// Route to create a new contact
router.post('/', contactController.createContact);

// Route to get all contacts
router.get('/', contactController.getAllContacts);

// Route to get a single contact by ID
router.get('/:id', contactController.getContactById);

// Route to update a contact by ID
router.put('/:id', contactController.updateContactById);

// Route to delete a contact by ID
router.delete('/:id', contactController.deleteContactById);

module.exports = router;
