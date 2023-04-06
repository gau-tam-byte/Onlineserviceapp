const jwt = require('jsonwebtoken')

const User = require('../models/user')

const Authenticatess = (async (req,res,next) =>{

  try {
    const token = await req.cookies.jwtoken;
  
    const verifytoken = jwt.verify(token,process.env.SECRETKEYFORUSER)
    const rootuser = await User.findOne({_id: verifytoken._id,"tokens.token":token})
    
    if(!rootuser){
      throw new Error('user not found')
    }
    req.token = token;
    // console.log(token)
    req.rootuser = rootuser;
    req.userID = rootuser._id;
    req.userRequests = rootuser.Requests;

    next()
    return token
   
  } catch (error) {
    res.status(400).send('Unauthorized User: Please First Login')
    console.log(error)
  }
})

module.exports = Authenticatess