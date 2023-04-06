import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function AgentLogout() {
  const navv = useNavigate()
  useEffect(()=>{
    fetch('/agentlogout',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/josn",
      },
      credentials:"include"
    }).then((res)=>{
      navv('/agentlogin', {replace:true})
      if(!res.status !== 200 ){
        throw console.error({error:"error while logging out"});
      }
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <div>AgentLogout</div>
  )
}

export default AgentLogout