const listContacts = require('./listContacts')
const updateListContacts = require('./updateListContacts')

const removeContact = async(contactId) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(({ id }) => String(id) === String(contactId))
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter((_, index) => index !== idx)
  await updateListContacts(newContacts)
  return contacts[idx]
}

module.exports = removeContact
