const express = require ('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        "project": "sempreAjudar",
        "version": "1.0.0",
        "message": "O sempreAjudar é um projeto de conclusão de curso do bootcamp de Back-end da {reprograma} (https://reprograma.com.br/) em parceria com a [Accenture] (https://www.accenture.com/br-pt). O projeto consiste na construção de uma API que tem como objetivo realizar doações para diversas ONGs do Brasil."
    })
})


module.exports = router