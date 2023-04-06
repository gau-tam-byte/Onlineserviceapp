import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function AgentLogin() {
  const naviagatee = useNavigate();
 const [agent, setagent] = useState({name:"",Password:""})

  const handleinputsss = (e) =>{
    console.log(e)
      
    let name, value
    name = e.target.name;
    value = e.target.value;

    setagent({...agent,[name]:value})
  }

  const verifyagentdata = async (e) =>{
    e.preventDefault()

    const { name, Password } = agent
    let res = await fetch('/agentlogin',{
      method : "POST",
      headers :{
           "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, Password, 
      })
    })
    const data = await res.json();

    if(res.status === 400 || !data){
      window.alert("unSuccess Login/ Invalid Credentials")
      console.log('unSucess Login')
      naviagatee('/Login')
    }else{
      window.alert("Login successfull!")
      console.log('Login successfull!')
      naviagatee("/Serreqs")
    }
  }
  return (
    <>
    <div style={{backgroundColor:"cornflowerblue", height:"auto"}} className=" border rounded mr-2 ml-2  mb-2" >
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border rounded border-1 border-dark"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Agent Login</h2>
                  <p className=" mb-5">Please enter your Name and password to Login!</p>
                  <div className="mb-3">
                    <Form method='POST'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" name="name" onChangeCapture={handleinputsss} defaultValue={agent.name} placeholder="Enter Name" />
                        <Form.Text className="text-muted">
          We'll never share your Name with anyone else.
        </Form.Text>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="Password" onChangeCapture={handleinputsss} defaultValue={agent.Password} placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me In" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="dark" type="submit" onClick={verifyagentdata}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account??{" "}
                        <Link to="/AgentRegister" className="text-danger fw-bold">Agent Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default AgentLogin