const express = require("express")
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')
const Donate = require("../models/donate")
const mongoose = require("mongoose")

const getAllDonates = async (req, res) => {
    const doacoes = await Donate.find().populate('ong')
    res.status(200).json(doacoes)
}

const newDonate = async (req,res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(" ")[1]

    if (!token) {
        return res.status(403).send({message: "Não existe nenhum autorização definida"})
    }
    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).json({message: 'Token inválido', err})
        }
    const donate = new Donate ({
        _id: new mongoose.Types.ObjectId(),
        valor: req.body.valor,
        ong: req.body.ong
    })
    try {
        const novaDoacao = await donate.save()
        res.status(201).json(novaDoacao)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})
}

const updateValueDonate = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(" ")[1]

    if (!token) {
      return res.status(403).send({message: "Não existe nenhum autorização definida"})
    }
    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).json({message: 'Token inválido', err})
        }
    try {
        const donate = await Donate.findById(req.params.id)
        if (donate == null) {
            return res.status(404).send({message: 'Doação não encontrada'})
        }
        if (req.body != null) {
            donate.valor = req.body.valor
        }        
        const updateValueDonate =  await donate.save()
        console.log(updateValueDonate)
        res.status(200).json(updateValueDonate)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
}

module.exports = {
    newDonate,
    getAllDonates,
    updateValueDonate
}