const Contact = require('../models/contact');

// Controller to create a new contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const contact = new Contact({ name, email, phone });
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact created successfully', contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create contact', error: error.message });
  }
};

// Controller to get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contacts', error: error.message });
  }
};

// Controller to get a single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(200).json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contact', error: error.message });
  }
};

// Controller to update a contact by ID
exports.updateContactById = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const contact = await Contact.findByIdAndUpdate(req.params.id, { name, email, phone }, { new: true });
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(200).json({ success: true, message: 'Contact updated successfully', contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update contact', error: error.message });
  }
};

// Controller to delete a contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(200).json({ success: true, message: 'Contact deleted successfully', contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete contact', error: error.message });
  }
};
