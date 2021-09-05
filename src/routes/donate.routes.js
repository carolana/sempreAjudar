const express = require ('express')
const router = express.Router()
const controller = require('../controllers/donateController')


router.get('/allDonates', controller.getAllDonates)
router.post("/donate", controller.newDonate)
router.patch('/updateDonate/:id', controller.updateValueDonate)



module.exports = router