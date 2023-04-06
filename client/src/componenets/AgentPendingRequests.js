import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import bg from '../images/coold.png';
import { Link } from 'react-router-dom';

function AgentPendingRequests() {
  const na = useNavigate()
  const [userreqstoagentpage, setuserreqstoagentpage] = useState({penreqforagent:[]})
  const [agentdet, setagentdet] = useState({aprofes:"",agname:""})
  const showpednigresofusers = async () => {
    try {
      const res = await fetch('/ReqofuserRequests',{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
        },
        credentials:"include"
     
      })
      const data = await res.json()
      setuserreqstoagentpage({...userreqstoagentpage, penreqforagent:data })
    } catch (error) {
      console.log(error)
      na('/AgentLogin')
    }

  }

  const agentdetail = async()=>{

    const ress = await fetch("/agentpro",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      credentials:"include"
    })
    const dataaf = await ress.json()
    setagentdet({...agentdet, aprofes: dataaf.Profession, agname: dataaf.name})
  }


  useEffect(() => {
    showpednigresofusers();
    agentdetail()
   }, [])
  return (
    <>
    {/* <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height:"auto" }} className="mr-2 ml-2 pb-2 mb-2 rounded"> */}
         <h6 className='d-flex justify-content-center align-items-center mb-3'>Your Profession - {agentdet.aprofes} & Service Requests Accepted By you - {agentdet.agname}, The details of clients from your accepted service requests are shown below!!</h6>
         
    <>
    
           
      {userreqstoagentpage.penreqforagent.map(j=>{
        return(
          <>
           
          {j.Requests.map((k)=>{
            const checkagentwithreq = agentdet.aprofes === k.AgentProfession && agentdet.agname === k.Agentname && k.Status !== "Pending...."
            
            if(checkagentwithreq){
              return(
                <>
                <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height:"auto" ,width:"auto" }}  className="flex-direction: row justify-content-space-between align-items-center mr-5 ml-5 pt-3 pr-5 pl-5 rounded">
                <Form >
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Client Name</Form.Label>
                  <Form.Control
                    required
                   
                    key={k._id}
                    defaultValue={k.name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Client-ID</Form.Label>
                  <Form.Control
                    required
                    key={k._id}
                    defaultValue={k._id}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Time</Form.Label>
                  <Form.Control type="text" placeholder="City" required key={k._id}  defaultValue={k.Time}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Client Phone No.</Form.Label>
                  {/* <Form.Control typeof="link" placeholder="State" required
                  key={k._id} defaultValue={k.Phone}/> */}
                  <div key={k._id} className='rounded pb-1 pt-1 ' style={{ border: "1px solid black", backgroundColor:"white" }}><Link to="tel:{x.Phone}">{k.Phone}</Link></div>

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
               
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="text" placeholder=
                  "City" required key={k._id} defaultValue={k.Date} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Request Type</Form.Label>
                  <Form.Control type="text" placeholder=
                  "Zip" required key={k._id} defaultValue={k.Reqtype}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder=
                  "City" required key={k._id} defaultValue={k.Description} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" placeholder="State" required key={k._id} defaultValue={k.Status}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                
              </Row>
            
              {/* <Button type="submit">Submit form</Button> */}
      </Form>
      </div>
      <br></br>
                
                </>
              )
            }else{
              console.log("not matched with anyone requests you accepted")
            }
           
          })}
          
          </>
        )
      })}
     
    </>
    {/* </div> */}
    </>
   
  )
}

export default AgentPendingRequests