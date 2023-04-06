import React from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react'
import bgg from '../images/c.png'
import bggg from '../images/c.png'
import { Link } from 'react-router-dom';



const UserRequests =() =>{

  useEffect(() => {
    userrequests()
  },[])

  const [arrofobj, setarrofobj] = useState({arr:[]})
  const userrequests = async()=>{
    try {
      const res = await fetch('/UserRequests',{
        method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          },
          credentials:"include"  
      })
      const data = await res.json()
      console.log(data)
      setarrofobj({...arrofobj, arr:data})
      console.log(arrofobj)
    } catch (error) {
      console.log({error:"data is not recieved"})
    }

  }

  return (
  <>
  <div style={{backgroundImage:`url(${bggg})`,backgroundSize: 'cover', height:"600px"}}>
  <div style={{backgroundImage:`url(${bgg})`,backgroundSize: 'cover', height:"auto",border: "1px solid black", borderRadius:"10px"}} className='mr-3 ml-3 mb-5 mt-5'>
  <Table responsive='md' striped hover size='md' style={{border: "1px solid black", borderRadius:"10px", overflow: 'hidden',height:'auto'}}>
  <thead className='table-secondary' style={{border: "px solid black"}}> 
        <tr >
          <th style={{border: "1px solid black"}}>Request ID</th>
          <th style={{border: "1px solid black"}}>Request Type</th>
          <th style={{border: "1px solid black"}}>Date YYYY-MM-DD</th>
          <th style={{border: "1px solid black"}}>Time 24-hour</th>
          <th style={{border: "1px solid black"}}>Description</th>
          <th style={{border: "1px solid black"}}>Request Status</th>
          <th style={{border: "1px solid black"}}>Technician Name</th>
          <th style={{border: "1px solid black"}}>Technician Profession</th>
          <th style={{border: "1px solid black"}}>Technician Contact</th>
        </tr>
      </thead>
    {arrofobj.arr.map(i=>{
      return(
      
        <tr className='table-info'>
          <td>{i._id}</td>
          <td>{i.Reqtype}</td>
          <td>{i.Date}</td>
          <td>{i.Time}</td>
          <td>{i.Description}</td>
          <td>{i.Status}</td>
          <td>{i.Agentname}</td>
          <td>{i.AgentProfession}</td>
          <td><Link to="tel:{i.AgentPhone}">{i.AgentPhone}</Link></td>
          
          {/* <td>{i.AgentPhone}</td> */}
        </tr>
      )
    })}
  </Table>
  </div>
  </div>
  
  </>
  )
}

export default UserRequests