const express = require('express')
const router = express.Router()
const wargaController = require('../controllers/wargaController')
const authorization = require('../middleware/authorization')

router.get('/me', authorization.verifyToken, wargaController.getDetailWarga )
router.get('/all', authorization.verifyToken, authorization.verifyAdmin, wargaController.getAllWarga)

module.exports = router