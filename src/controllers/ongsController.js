const express = require("express")
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')
const Ong = require('../models/ongs')
const mongoose = require("mongoose")




const getAllOngs = async (req, res) => {
    const ongs = await Ong.find()
    res.json(ongs)
}

const newOng = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(" ")[1]

    if (!token) {
        return res.status(403).send({message: "Não existe nenhum autorização definida"})
      }

    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).json({message: 'Token inválido', err})
        }
    const ong = new Ong ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        areaAtuacao: req.body.areaAtuacao,
        criadoEm: req.body.criadoEm
    })
    const OngJaExiste = await Ong.findOne({nome: req.body.nome})
    if(OngJaExiste) {
        return res.status(409).send({error: 'ONG já cadastrada.'})
    }
    try {
        const novaONG = await ong.save()
        res.status(201).json(novaONG)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})
}

const getOngById = async (req, res) => {
    const requisitedId = req.params.id
    const OngById =  await Ong.findOne({_id: requisitedId})
    if(OngById) {
        res.json(OngById)
    } else {
        res.status(404).send({message: 'ONG não encontrada'})
    }
}

const deleteOng = async (req,res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(" ")[1]

    if (!token) {
      return res.status(403).send({message: "Não existe nenhum autorização definida"})
    }

    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).json({message: 'Token inválido', err})
        }
    const ong = await Ong.findById(req.params.id)
    if(ong == null) {
        return res.status(404).send({message: "ONG não encontrada"})
    }
    ong.deleteOne(
        {id: req.params.id},
        function(err) {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).send({message: "ONG deletada com sucesso"})
            }
        }
        )
    })
}

module.exports = {
    getAllOngs,
    getOngById,
    newOng,
    deleteOng
}