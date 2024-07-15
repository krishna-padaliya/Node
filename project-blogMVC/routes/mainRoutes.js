const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainControllers')

router.get('/',mainController.getSignup)


module.exports = router