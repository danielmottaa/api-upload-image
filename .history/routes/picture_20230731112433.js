const express = require('express')
const router = express.Router()

const upload = require('../config/multer')

const PictureController = require('../controller/PictureController')

router.post('/', upload.single('file') , PictureController.create)
router.get('/', PictureController.findAll)
router.delete('/:id', PictureController.remove)

module.exports = router