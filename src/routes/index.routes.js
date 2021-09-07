const express = require ('express')
const router = express.Router()
const controller = require('../controllers/indexController')


router.get('/ongs', controller.welcome)


module.exports = router