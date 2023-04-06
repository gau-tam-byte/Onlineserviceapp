const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
// const { string } = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  Phone: Number,
  password: String,
  confirmationPassword: String,
  tokens:[{
    token: String,
  }],
   Requests: [{
    name: String,
    email: String,
    Phone: Number,
    Reqtype: String,
    Date: String,
    Time: String,
    Description: String,
    Status: String,
    Agentname : String,
    AgentProfession : String,
    AgentPhone: String,
   }]
}, {
  // 3 
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

// module.exports.hashPassword = async (password) => {
//   try {
//     const salt = await bcrypt.genSalt(10)
//     return await bcrypt.hash(password, salt)
//   } catch(error) {
//     throw new Error('Hashing failed', error)
//   }
// }

userSchema.pre('save', async function (next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12)
    this.confirmationPassword = await bcrypt.hash(this.confirmationPassword,12)
  }
})

userSchema.methods.generateAuthToken = async function(){
  try {
    let token =  jwt.sign({_id: this.id},process.env.SECRETKEYFORUSER)
    this.tokens = this.tokens.concat({token : token})
    await this.save()
    return token
  } catch (error) {
    console.log(error)
  }
}

userSchema.methods.addrequest = async function(name,email,Phone,Reqtype,Date,Time,Description,Status,Agentname,AgentProfession,AgentPhone){
  try {
    this.Requests = this.Requests.concat({name,email,Phone,Reqtype,Date,Time,Description,Status,Agentname,AgentProfession,AgentPhone})
    await this.save()
    return this.Requests
  } catch (error) {
    console.log(error)
  }
}
// 4 

const User = mongoose.model('user', userSchema)
module.exports = User