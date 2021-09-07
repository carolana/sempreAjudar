const express = require ('express')
const router = express.Router()
const controller = require('../controllers/indexController')


router.get('/sempreAjudar', controller.welcome)


module.exports = router