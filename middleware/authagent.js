const agentjwtoken = require('jsonwebtoken')
const user = require('../models/user')
const Agent = require('../models/agentdb')

const agentauth = (async (req, res, next) => {
  try {
    const token = await req.cookies.agentjwtoken
    const verifytk = await agentjwtoken.verify(token,process.env.SECRETKEYFORAGENT)
    const agentpro = await Agent.findOne({ _id: verifytk._id, "Tokens.token": token })
    const userroot = await user.find({})
    const reqs = await user.find({ $filter: { input: "Requests" } })
    console.log(userroot)

    if (!verifytk) {
      throw new console.error("User Not Found!");
    }
    req.userRoot = userroot
    req.AgentData = agentpro

    req.uerreqs = reqs
    next()
  } catch (error) {
    res.status(400).send('Unauthorized Agent: Please First Login')
    console.log(error)
  }
})

module.exports = agentauth