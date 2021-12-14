const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeContact(contactId) {
  const contacts = await listContacts()
  const contactIndex = contacts.findIndex(({ id }) => String(id) === String(contactId))
  if (contactIndex === -1) {
    return null
  }
  const newContacts = contacts.filter((_, index) => index !== contactIndex)
  await updateContacts(newContacts)
  console.table(newContacts)
  return contacts[contactIndex]
}

module.exports = removeContact
