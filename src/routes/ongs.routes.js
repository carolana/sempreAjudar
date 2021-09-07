const express = require ('express')
const router = express.Router()
const controller = require('../controllers/ongsController')


router.get('/', controller.getAllOngs)
router.post('/create', controller.newOng)
router.get('/:id', controller.getOngById)
router.delete('/delete/:id', controller.deleteOng)

module.exports = router