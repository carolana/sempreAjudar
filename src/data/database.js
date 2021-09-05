const MONGODB = process.env.MONGODB_URL
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