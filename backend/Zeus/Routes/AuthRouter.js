const { signup, login } = require('../Controllers/AuthController')
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation')
const { sendCode } = require('../Controllers/AuthController')
const { recoveryPassword } = require('../Controllers/AuthController')
const router = require('express').Router()


router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup)
router.post('/send-code', sendCode)
router.post('/resetPassword', recoveryPassword)


module.exports = router