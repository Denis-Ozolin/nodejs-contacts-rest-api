const contactsOperations = require('../../model/contacts')

const updateById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)
  res.status(201).json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateById
