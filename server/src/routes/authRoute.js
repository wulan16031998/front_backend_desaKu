const express = require('express')
const authController = require('../controllers/authController')
const validator = require ('../middleware/validators')
const router = express.Router()

router.post('/register', validator.registerValidator, authController.register)
router.post('/login', authController.login)

module.exports = router