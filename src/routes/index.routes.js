const express = require ('express')
const router = express.Router()
const controller = require('../controllers/indexController')


router.get('/', controller.welcome)


module.exports = router