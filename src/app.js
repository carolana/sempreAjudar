const express = require("express")
const app = express()

app.use(express.json())

const db = require('../src/data/database')
db.connect()

const ongsRouter = require("./routes/ongs.routes")
const donateRouter = require("./routes/donate.routes")
const usersRoutes = require("./routes/users.routes")

app.use('/sempreAjudar', ongsRouter)
app.use('/sempreAjudar', donateRouter)
app.use('/sempreAjudar/users', usersRoutes)

module.exports = app