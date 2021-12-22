const createError = require('http-errors')
const bcrypt = require('bcrypt')
const { User } = require('../../models')

const signup = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw createError(409, 'Email in use')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const result = await User.create({ email, password: hashPassword })
  const subscription = result.subscription

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription
      }
    }
  })
}

module.exports = signup
