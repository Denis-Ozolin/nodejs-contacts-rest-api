const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContacts = require('./updateContacts')

// const listContacts = async () => {}
// const getContactById = async (contactId) => {}
// const removeContact = async (contactId) => {}
// const addContact = async (body) => {}
// const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContacts,
}
