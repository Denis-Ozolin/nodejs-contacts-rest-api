const express = require('express')

const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSignupSchema } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup))

module.exports = router