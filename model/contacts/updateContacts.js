const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'db', 'contacts.json')

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
}

module.exports = updateContacts
