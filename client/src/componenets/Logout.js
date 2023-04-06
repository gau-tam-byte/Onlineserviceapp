import React, { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const naviagatee = useNavigate();
  useEffect(()=>{
    fetch('/logout',{
      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials:"include"
      
    }).then((res)=>{
      naviagatee('/', {replace: true})
      if(res.status !== 200){
        const err = new Error(res.Error)
        throw err
      }
    }).catch((err)=>{
      console.log(err)
    });
  })
  return (

    <>
         <div>User Logout</div>
    </>

  )
}

export default Logout