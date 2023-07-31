const express = require('express')
const router = express.Router()

const PictureController = require('../controller/PictureController')

router.post('/', PictureController.create)

module.exports = router