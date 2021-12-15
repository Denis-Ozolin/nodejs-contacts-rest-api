const listCotacts = require('./listContacts')
const updateListContacts = require('./updateListContacts')

const updateContact = async(contactId, body) => {
  const contacts = await listCotacts()
  const idx = contacts.findIndex(({ id }) => String(contactId) === String(id))
  if (idx === -1) {
    return null
  }
  contacts[idx] = { id: contactId, ...body }
  await updateListContacts(contacts)
  return contacts[idx]
}

module.exports = updateContact
