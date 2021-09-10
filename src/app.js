const express = require("express")
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require("cors")

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.use(cors())

const db = require('../src/data/database')
db.connect()

const ongsRouter = require("./routes/ongs.routes")
const donateRouter = require("./routes/donate.routes")
const usersRoutes = require("./routes/users.routes")
const index = require("./routes/index.routes")

app.use('/', index)
app.use('/ong', ongsRouter)
app.use('/donate', donateRouter)
app.use('/users', usersRoutes)

module.exports = app