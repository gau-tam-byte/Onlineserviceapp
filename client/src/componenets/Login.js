import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Login = () => {
  const naviagatee = useNavigate();
  const [ user, setUser ] = useState({
    email :"", password:""
  })

  const handleinputss = (e) =>{
    console.log(e)
      
    let name, value
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }

  const verifydata = async (e) =>{
    e.preventDefault()

    const {  email, password } = user
    let  res = await fetch('/login',{
      method : "POST",
      headers :{
           "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password, 
      })
    })
    const data = await res.json();

    if(res.status === 400 || !data){
      window.alert("unSuccess Login/Invalid Credentials")
      console.log('unSucess Login')
      naviagatee('/Login')
    }else{
      window.alert("User Login successfull!")
      console.log('sucessfull Login')
      naviagatee("/Reqser")
    }
  
  } 
  return (
  <>
  <div style={{backgroundColor:"beige"}} className=" border rounded mr-2 ml-2  mb-2">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border rounded border-1 border-primary"></div>
            <Card className="dark shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">User Login</h2>
                  <p className=" mb-5">Please enter your email and password!</p>
                  <div className="mb-3">
                    <Form method='POST'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type='email' name="email" required onChangeCapture={handleinputss} defaultValue={user.email} placeholder="Enter email" />
                        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="password" onChangeCapture={handleinputss} defaultValue={user.password} placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me In" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={verifydata}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account??{" "}
                        <Link to="/Register" className="text-warning fw-bold">Sign Up</Link>
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
export default Login