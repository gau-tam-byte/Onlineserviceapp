const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const auth = require('../middleware/authenticate');



  router.post('/register',async (req, res, next) => { 

    try {
      const { name, username, email,Phone, password, confirmationPassword} = req.body

      if ( !name || !username || !email ||!Phone|| !password || !confirmationPassword) {
      
        return res.status(422).json({error : "Please fill all the data"})
      }
      const user = await User.findOne({ email: email })
      if (user) {
 
        return res.status(421).json({error : "Email is already in use."})
      }
   
      const newUser = await new User(req.body)
      const userregistered = await newUser.save()
      if(userregistered){
        return res.status(201).json({message : "User Successfully registered"})
      }
      
    } catch(error) {
   
      console.log(error)
    }
  });



  router.post('/login',async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password ) {
      return res.status(400).json({error:"Please fill the credentials"})
      
    }
    const user = await User.findOne({ email: email })
    console.log(req.body.password)
    if (user) {
      let passwordIsValid = await bcrypt.compareSync( password , user.password);
      let token = await user.generateAuthToken();
      console.log(token)
      res.cookie('jwtoken',token,{
        expires: new Date(Date.now() + 1000000),
        httpOnly:true
      })
      if (!passwordIsValid) {
        return res.status(400).json({error:"Invalid Credentials"})
    
       
      }else{
        res.json({message:"user Login Sucessfull"})
      }
   
    }
  } catch (error) {
    next(error)
  }

})

router.get('/getdata',auth,(req,res)=>{
  console.log("hello from Request service page")
  res.send(req.rootuser)
})

router.post('/Reqser',auth, async (req,res)=>{
  try {
    const {name, email, Phone, Reqtype, Date ,Time,Description,Status,Agentname,AgentProfession,AgentPhone} = req.body
    
    if ( !name|| !email|| !Phone ||!Reqtype || !Date  || !Time|| !Description || !Status || !Agentname || !AgentProfession || !AgentPhone) {
      
      return res.status(422).json({error :" PLease Enter all data"})
    }
  
    const usercontact = await User.findOne({_id : req.userID})
    if(usercontact){
      let save = await usercontact.addrequest(name,email,Phone,Reqtype,Date,Time,Description, Status,Agentname,AgentProfession,AgentPhone);
      let savedtodb = await usercontact.save()
      if(savedtodb){
        return res.status(200).json({message :"Request Sent Successfully!"})
      }else{
        return res.status(400).json({error:"not send"})
      }
    }else{
      return res.status(421).json({error:"Request Not Sent user not matched"})
    } 
  } catch(error) {
    console.log(console.error("Request Not sent!!????"))
  }

})

router.get('/AboutMe',auth,(req,res)=>{
  console.log("hello from about us page")
  res.send(req.rootuser)
})

router.get('/UserRequests', auth, (req,res)=>{
  // try {
  //   const requests = await User.findOne({_id : req.body._id})   
  //   if(!requests){
  //     res.status(400).json({error:"data not came"})
  //   }else{
  //     res.send(req.userRequests)
  //   }
  //   res.send(requests) 
  // } catch (error) {
  //   console.log(error)
  // }
  console.log("Hello from all requests pages")
  res.send(req.userRequests)
})



router.get('/logout',(req,res)=>{
  res.clearCookie('jwtoken',{path: '/'})
  res.status(200).send("User Logged out")
})
  module.exports = router