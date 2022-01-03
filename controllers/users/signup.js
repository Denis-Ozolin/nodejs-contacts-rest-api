const createError = require('http-errors')
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid')
const { sendEmail } = require('../../helpers')
const { User } = require('../../models')

const signup = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw createError(409, 'Email in use')
  }

  const verificationToken = nanoid()
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const result = await User.create({ email, password: hashPassword, verificationToken })
  const subscription = result.subscription
  const mail = {
    to: email,
    subject: 'Подтверждение email',
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}'>Подтверждить email</a>`
  }

  await sendEmail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription,
        verificationToken
      }
    }
  })
}

module.exports = signup
