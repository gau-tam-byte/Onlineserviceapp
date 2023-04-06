const mongoose = require('mongoose')
const agentSchema = mongoose.Schema
const bcrypt = require('bcryptjs')
const jwtoken = require('jsonwebtoken')

const agentdb = new agentSchema({
  name: String,
  Phone: Number,
  NationalID: Number,
  Profession: String,
  Password: String,
  cPassword: String,
  Tokens:[{
    token: String
  }]
},{
  // 3 
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})
agentdb.pre('save', async function (next){
  if(this.isModified('Password')){
    this.Password = await bcrypt.hash(this.Password,12)
    this.cPassword = await bcrypt.hash(this.cPassword,12)
  }
})

agentdb.methods.genagentauthtoken = async function(){
  try {
    let token = await jwtoken.sign({_id: this.id},process.env.SECRETKEYFORAGENT)
    this.Tokens = this.Tokens.concat({token:token})
    await this.save()
    return token

  } catch (error) {
    console.log(error)
  }

}

const agent = mongoose.model('agent',agentdb)

module.exports = agent