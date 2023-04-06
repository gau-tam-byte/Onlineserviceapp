import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bg from '../images/c.png'
import bgg from '../images/cool.png'
import {FiMail,FiSmartphone,FiUser,FiKey} from "react-icons/fi";
import {AiOutlineProfile} from "react-icons/ai";
import {MdHomeRepairService} from "react-icons/md";
const AboutMe = () => {
  const Navigates = useNavigate()
  const [userData, seruserData] = useState({})
  const callaboutuspage = async ()=>{
    try {
      const res = await fetch('/AboutMe',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
        credentials:"include"  
      })
      const data = await res.json()
      console.log(data);
      seruserData(data)

      if(!res.status === 200 ){
        const error = new Error(res.error)
        throw error;
      }
    } catch (error) {
      console.log(error)
      Navigates('/login')
    }
  }
  useEffect(() => {
    callaboutuspage()
  },[])
  return (
   <>
    <div style={{backgroundImage:`url(${bg})`,backgroundSize: 'cover', height:"auto"}} className="mr-2 ml-2 mb-2 rounded">
   <Container >
    <Row className="d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>

      <div className="container md-12 mt-5 rounded" style={{border:'1px solid black',backgroundImage:`url(${bgg})`,backgroundSize: 'cover'}}>
        <h1 className='pb-2'>{<AiOutlineProfile/>} Profile</h1>
    <form method="GET">
        <div className='row'> 
            <div className='col-md-12'>
                <h5>Name - {userData.name}</h5>
                <ul className="nav nav-tabs-border-color: black" role="tablist">
                  <li className="nav-item pt-3">
                    <a className="nav-link active " id="home-tab "href="#Home" role="tab">.</a>
                  </li>
                  
                </ul>
            </div>
        </div>
            <div className='row'>
            <div className='col-md-12 about-info'>
                <div className='tab-content profile-tab ' id='myTabContent'>
                    <div className='tab-pane fade show active ' id='Home' role="tabpanel" aria-labelledby='home-tab'>
                    <div className='row'>
                          <div className='col-md-6'>
                            <label>{<FiUser/>} Username </label>
                          </div>
                          <div className='col-md-6'>
                            <p>{userData.username}</p>
                          </div> 
                          <div className='col-md-6'>
                              <label>{<FiSmartphone/>} Phone</label>
                          </div>
                          <div className='col-md-6'>
                            <p>{userData.Phone}</p>
                          </div> 
                          <div className='col-md-6'>
                              <label>{<FiMail/>} Email</label>
                          </div>
                          <div className='col-md-6'>
                            <p>{userData.email}</p>
                          </div> 
                          <div className='col-md-6'>
                              <label>{<FiKey/>} User-ID</label>
                          </div>
                          <div className='col-md-6'>
                            <p>{userData._id}</p>
                          </div> 
                        
                      </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </form>
    <div className='pt-3'>
      <Link  to='/UserRequests'>{<MdHomeRepairService/>} Your Service Requests</Link>
    </div>
    </div>
      </Col>
    </Row>
    </Container>
    </div>
   </>
  )
}
export default AboutMe