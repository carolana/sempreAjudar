const MONGODB = process.env.MONGODB_URI || process.env.MONGODB_URL
require('dotenv').config
const mongoose = require("mongoose")

console.log(MONGODB)

const connect = () => {mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('Database conectado com sucesso'))
.catch(err => console.err)
}

module.exports = {connect}