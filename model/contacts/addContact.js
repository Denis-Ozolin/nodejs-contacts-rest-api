const { v4: uuidv4 } = require('uuid')
const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function addContact(name, email, phone) {
  const contacts = await listContacts()
  const newContact = { id: uuidv4(), name, email, phone }
  const newContacts = [...contacts, newContact]
  await updateContacts(newContacts)
  console.log(newContact)
  return newContact
}

module.exports = addContact
