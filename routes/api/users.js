const express = require('express')

const { auth, validation, ctrlWrapper, upload } = require('../../middlewares')
const { joiSignupSchema, joiLoginSchema } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup))

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login))

router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))

router.get('/current', auth, ctrlWrapper(ctrl.current))

router.get('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router
