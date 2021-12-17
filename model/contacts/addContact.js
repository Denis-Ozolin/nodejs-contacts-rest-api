const { v4: uuidv4 } = require('uuid')
const listContacts = require('./listContacts')
const updateListContacts = require('./updateListContacts')

const addContact = async(body) => {
  const contacts = await listContacts()
  const newContact = { id: uuidv4(), ...body }
  const newContacts = [newContact, ...contacts]
  await updateListContacts(newContacts)
  return newContact
}

module.exports = addContact
