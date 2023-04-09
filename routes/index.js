const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const agent = require('../models/agentdb')
const user = require('../models/user')
const agentauth = require('../middleware/authagent')





router.post('/agentregister',async (req,res,next)=>{
  try {
    const{ name , Phone, NationalID, Profession, Password, cPassword} = req.body;
    if(!name || !Phone ||!NationalID||!Profession||!Password||!cPassword){
      return res.status(401).send("Fill all the Required Data")
    }

    const newagent = await new agent(req.body)
    const agentregister = await newagent.save()
    if(agentregister){
      return res.status(201).json({message:"Agent Successfully Register!"})
    }
  } catch (error) {
    return res.status(400).json({error:"Agent Not registered!?"})
  }
 
})


router.post('/agentlogin',async(req,res,next)=>{
   try {
    const { name, Password } = req.body
    if (!name || !Password ) {
      return res.status(400).json({error:"Please Fill the credentials"})
      
    }
    const Agent = await agent.findOne({ name:name })
    console.log(req.body.Password)
    if (Agent) {
      let passwordIsValid = await bcrypt.compareSync( Password, Agent.Password);
      const token = await Agent.genagentauthtoken()
      console.log(token)
      res.cookie('agentjwtoken',token,{
        expires: new Date(Date.now() + 1000000),
        httpOnly:true
      })
      if (!passwordIsValid) {
        return res.status(400).json({error:"Invalid Credentials"})
       
      }else{

       return  res.status(200).json({message:"Agent Login Successfull"})
      }
   
    }
   } catch (error) {
    next(error)
  
   }
})


router.get('/serreqs',agentauth,(req,res)=>{
 


  res.send(req.userRoot)

  
})

router.get('/aboutagent',agentauth,(req,res)=>{
  res.send(req.AgentData)
})

router.get('/ReqofuserRequests',agentauth,(req,res)=>{
  res.send( req.uerreqs )
})



// router.put('/updsta',async(req,res)=>{
//   const id = req.body.email
//   const st = req.body.Status
//   const Desc = req.body.descc

//   try {
//     const match = await user.find({email: id})
//     if(match){
//       await user.updateMany({"Requests.Description": Desc},{$set:{"Requests.$.Status":st}},{new:true},(errr,doc)=>{
//         if(errr){
//           console.log(errr)
  
//         }else{
//           res.send(doc)
//           console.log("docment updated")
//         }
//       })
//     } 
//   }catch (error) {
//     console.log(error)
//   }
// })

router.put('/updsta',async(req,res)=>{

  const {email, descc, Status,name, Profession, Phone  } = req.body

  try {
      await user.findOneAndUpdate({_id : email , "Requests.Description":descc },{$set:{"Requests.$.Status":Status,"Requests.$.Agentname":name, "Requests.$.AgentProfession": Profession, "Requests.$.AgentPhone":Phone}},{new:true},(err,doc)=>{
      if(err){
        console.log(err)
        // return res.sendStatus(400).json({error:"request status not updated!!"})
      }else{
        res.send(doc)
        console.log(doc)
        console.log("docment updated")
        // return res.sendStatus(200).json({message:"reuqest status updated successfully!"})
      }
    })
  } catch (error) {
    console.log(error)
  }
})

router.get('/agentpro',agentauth,(req,res)=>{

  res.send( req.AgentData)
})
router.get('/agentlogout',(req,res)=>{
  res.clearCookie('agentjwtoken')
  res.status(200).send({message:"agentloggedout"})
})

module.exports = router