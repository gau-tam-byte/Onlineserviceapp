import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bgg from '../images/co.png'
import { SiNamecheap, SiStatuspage } from "react-icons/si"
import { FiMail, FiPhoneCall, FiPhone, FiStar} from "react-icons/fi";
import { BiGitPullRequest, BiKey, BiTimeFive } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

import bc from '../images/c.png';
import bg from '../images/cool-backgroun.png'

const Serreqs = () => {
  const naviii = useNavigate()
  const [SerReqsbyuser, setSerReqsbyuser] = useState({ userreqwithadddetails: [] })
  const [userData, seruserData] = useState({ email: "", descc: "", Status: "" , name:"",Profession: "", Phone:"" })
  // const [status, setstatus] = useState({ email: "", descc: "", Status: "" ,name:"", Profession:"", Phone:""})
  // const [agentdatabupload, setagentdatabupload] = useState({name:"",_id:"",Phone:"",Date:"",Time:"",Reqtype:"", Description:"",Status:""})
  // const [updatereqstatus, setupdatereqstatus] = useState({updatependingstatus:[]})

  const callpage = async () => {
    try {
      const res = await fetch('/Serreqs', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
      const data = await res.json()
      setSerReqsbyuser({ ...SerReqsbyuser, userreqwithadddetails: data })

    } catch (error) {
      console.log(error)
      naviii('/AgentLogin')

    }
  }

  const callabtagent = async () => {
    try {
      const resagent = await fetch('/AboutAgent', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
      const dataagent = await resagent.json()
      console.log(dataagent)
      seruserData({ ...userData, Profession: dataagent.Profession ,name: dataagent.name, Phone: dataagent.Phone, email:"",descc:"", Status:"" })
      console.log(userData)
    } catch (error) {
      console.log(error)
      naviii('/AgentLogin')

    }
  }
  // const calluserreqs = async()=>{
  //   try {
  //     const resreqs = await fetch('/ReqofuserRequests',{
  //       method:'GET',
  //       headers:{
  //         Accept:"application/json",
  //         "Content-Type":"application/json",
  //   },
  //     credentials:"include"
  //   })
  //     const datareqs = await resreqs.json()
  //     console.log(datareqs)
  //     setupdatereqstatus({...updatereqstatus,updatependingstatus:datareqs})
  //      console.log(updatereqstatus)
  //   }catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleinput = (e) => {
    let name, value

    name = e.target.name
    value = e.target.value
    seruserData({ ...userData, [name]: value })
    console.log(userData)
  }
  const updatestatus = async () => {

    let { email, descc, Status, name, Profession, Phone } = userData
    // const res =
    await fetch('/updsta', {
      method: "PUT",
      headers:{
        // Accept: "application/json",
        "Content-type":"application/json",

      },
      body: JSON.stringify({ email, descc, Status,name ,Profession,Phone })


    })
    // const data = res.json()
    // if(res.status === 200 || data){
    //   window.alert("Request Status Updated")
    // }
    // else{
    //   window.alert("Request status not Updated")
    // }
    // console.log(status)
  }

  // const uploaddataatoagent = async ()=>{
  //   const res = await fetch("/uploaddatatadb",{
  //     method:"POST",
  //     headers:{
  //       Accept:"application/json",
  //       "Content-Type":"application/json",
  //     },
  //     body:JSON.stringify({})
      
  //   })
  //   const data = res.json();
  //   if(!res.status === 200 || data){
  //     window.alert("stored in your database")
  //   }else{
  //     window.alert("not stored in your database")
  //   }
  // }

  useEffect(() => {
    callpage()
    callabtagent()
    // updatestatus()
    // calluserreqs() 
  }, [])


  return (
    < >
      <div style={{ backgroundImage: `url(${bgg})`, backgroundSize: 'cover', height:"auto" }} className="mr-2 ml-2 pb-2 mb-2 rounded">
      <div className='pt-2 ml-2'>
      <Link  to='/ReqofuserRequests'>Service Requests Accepted by You</Link>
      </div>
        {/* <div>This is where all the Service Requested are shown to agents ➡️ Build Under Construction</div> */}

        <div style={{ backgroundImage: `url(${bc})`, backgroundSize: 'cover', height: "auto" }} className="mr-2 ml-2 mt-2 mb-2 rounded">
          <h5 className='ml-2 mr-2 d-flex justify-content-center align-items-center mb-3'>Your Profession - {userData.Profession} & All Pending Service Request are shown here!</h5></div>

          {SerReqsbyuser.userreqwithadddetails.map(i => { 
            return (  
              <>
              {/* <div>{i._id}</div> */}
                {i.Requests.map((x) => {
                  const check = x.Reqtype === userData.Profession && x.Status === "Pending....";

                  if (check) {
                    return (
                      <>

                        {/* className='mr-3 ml-3' */}
                        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: "auto" }} className="pr-2 pl-2 pb-2 mr-2 ml-2 mt-2 mb-2  rounded">
                          <Form>
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridName">
                                <Form.Label >{<SiNamecheap />} Client Name</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.name} type="text" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{<FiMail />} Email</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.email} />
                              </Form.Group>
                             

                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='pt-0.9' >{<FiPhoneCall />} Phone</Form.Label><br></br>
                                {/* <Form.Control value={x.Phone} type="tel" /> */}
                                <div key={x._id} className='rounded pb-1 pt-1' style={{ border: "1px solid black", backgroundColor:"whitesmoke" }}><Link to="tel:{x.Phone}">{x.Phone}</Link></div>
                              </Form.Group>
                            </Row>
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>{<BsFillCalendar2DateFill />} Date YYYY-MM-DD</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.Date} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>{<BiTimeFive />} Time 24-Hour</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.Time} />
                              </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                              <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{<BiGitPullRequest />} Requested service </Form.Label>
                                <Form.Control key={x._id} readOnly value={x.Reqtype} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<BiKey />} Request-ID</Form.Label>
                                <Form.Control key={x._id} readOnly value={x._id} />
                              </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<MdDescription />} Description</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.Description} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<MdDescription />} Copy Description</Form.Label>
                                <Form.Control onChange={handleinput} name="descc" required/>
                              </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label >{<FiStar />} User ID</Form.Label>
                                <Form.Control key={x._id} readOnly value={i._id} type="text" />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<FiStar />} Copy User-ID</Form.Label>
                                <Form.Control onChange={handleinput} name="email" required />
                              </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                              <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{<SiStatuspage />} Request Status</Form.Label>
                                <Form.Control key={x._id} readOnly value={x.Status} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<SiStatuspage />} Update REQ Status</Form.Label>
                                <Form.Control onChange={handleinput} name="Status" required/>
                              </Form.Group>

                            </Row>
                            <Row className='mb-3'>

                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{<SiNamecheap />} Your name </Form.Label>
                                <Form.Control  readOnly  defaultValue={userData.name} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<GrUserWorker />} Your Profession </Form.Label>
                                <Form.Control readOnly  defaultValue={userData.Profession} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{<FiPhone />} Your Phone</Form.Label>
                                <Form.Control readOnly  defaultValue={userData.Phone} />
                              </Form.Group>

                            </Row> 


                            <Button variant="primary" type="submit" onClick={updatestatus}>
                              <Link ></Link>Confirm Accept
                            </Button>

                          </Form>
                        </div>
                      </>
                    )
                  }
                  else {
                    console.log("not matched ")
                  }
                })}
              </>
            )
          })}
        
      </div>
    </>
  )
}

export default Serreqs