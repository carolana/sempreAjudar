const mongoose = require("mongoose")

const donateSchema = new mongoose.Schema({
    _idDoacao: mongoose.Schema.Types.ObjectId,
    valor: {
        type: Number,
        required: true
    },
    ong: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ONG'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('donate', donateSchema)