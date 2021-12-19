const createError = require('http-errors')
const { Contact } = require('../../models')

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  if (favorite === undefined) {
    throw createError(400, 'missing field favorite')
  }
  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
  if (!result) {
    throw createError(404, `Contact with id=${contactId} not found`)
  }
  res.status(201).json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateStatusContact
