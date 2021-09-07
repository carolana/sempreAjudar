const express = require ('express')
const router = express.Router()
const controller = require('../controllers/donateController')


router.get('/', controller.getAllDonates)
router.post("/create", controller.newDonate)
router.patch('/update/:id', controller.updateValueDonate)



module.exports = router