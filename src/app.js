const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())

app.use(cors())

const db = require('../src/data/database')
db.connect()

const ongsRouter = require("./routes/ongs.routes")
const donateRouter = require("./routes/donate.routes")
const usersRoutes = require("./routes/users.routes")
const index = require("./routes/index.routes")

app.use('/', index)
app.use('/sempreAjudar', ongsRouter)
app.use('/sempreAjudar', donateRouter)
app.use('/sempreAjudar/users', usersRoutes)

module.exports = app