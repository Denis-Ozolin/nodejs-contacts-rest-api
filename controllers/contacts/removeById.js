const createError = require('http-errors')
const contactsOperations = require('../../model/contacts')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.removeContact(contactId)
  if (!result) {
    throw createError(404, `Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result
    }
  })
}

module.exports = removeById
