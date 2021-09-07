const express = require("express")


const welcome = async (req, res) => {
    res.status(200).send({
        message: "Bem vindo ao projeto sempreAjudar"
    })
}

module.exports = {
    welcome
}