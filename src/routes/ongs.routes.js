const express = require ('express')
const router = express.Router()
const controller = require('../controllers/ongsController')


router.get('/ongs', controller.getAllOngs)
router.post('/createONG', controller.newOng)
router.get('/ong/:id', controller.getOngById)
router.delete('/delete/:id', controller.deleteOng)

module.exports = router