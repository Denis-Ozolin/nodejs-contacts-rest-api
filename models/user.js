const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: 'user',
  // }
}, { versionKey: false, timestamps: true })

const joiSignupSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  // subscription: Joi.bool(),
  // token: Joi.string().required(),
})

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
})

const User = model('user', userSchema)

module.exports = {
  User,
  joiSignupSchema,
  joiLoginSchema
}
