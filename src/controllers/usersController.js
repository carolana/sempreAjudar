const SECRET = process.env.SECRET
const bcrypt = require("bcrypt")
const User = require("../models/users")
const jwt = require("jsonwebtoken")

const create = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const user = new User(req.body)

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const login = (req, res) => {
  User.findOne({email: req.body.email}, (err, userEncontrado) => {
    if (!userEncontrado) {
      return res.status(404).json({message: "Usuário não encontrado", email: `${req.body.email}` })
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, userEncontrado.senha)
    if(!senhaValida) {
      return res.status(401).json({message: "Login não autorizado"})
    }
    const token = jwt.sign({email: req.body.email}, SECRET)
    res.status(200).json({message: "Login realizado com sucesso", token: token})
  })
}

module.exports = { create, login}