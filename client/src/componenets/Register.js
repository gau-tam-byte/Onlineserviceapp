import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const  Register = () =>{
  const naviagate = useNavigate();
  const [ user, setUser ] = useState({
    name: "", username:"", email :"",Phone:"", password:"", confirmationPassword:""
  })
  const handleinputs = (e) =>{
    console.log(e)
      
    let name, value
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }
  const postdata = async (e) =>{
    e.preventDefault()
    
    const { name, username, email,Phone, password, confirmationPassword} = user
    let  res = await fetch('/register',{
      method : "POST",
      headers :{
           "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, username, email,Phone, password, confirmationPassword
      })
    })
    const data = res.json();

    if(res.status === 422 || !data){
      window.alert("PLease Fill all fields of data for Registration")
      console.log('invalid registration')
    }else if(res.status === 421 || !data) {
      window.alert("Email alredy exists")
    }else{
      window.alert("User Registration successfull!")
      console.log('sucessfull registration')
      naviagate("/Login")
    }
  } 
  return (
    <>
    <div style={{backgroundColor:"brown", height:"auto"}} className=" border rounded mr-2 ml-2 mb-2">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">User Register</h2>
                  <div className="mb-3">
                    <Form method='POST'>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text"  name="name" value={user.name} onChange={handleinputs} placeholder="Enter Name" />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='username'>
                        <Form.Label className='text-centre'>
                          Username
                        </Form.Label>
                        <Form.Control type='text' name='username' onChange={handleinputs} value={user.username} placeholder="Create Username"></Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" name="email" onChange={handleinputs} value={user.email} placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='Phone'>
                        <Form.Label className='text-centre'>
                          Phone
                        </Form.Label>
                        <Form.Control type='number' name='Phone' onChange={handleinputs} maxLength="11" required value={user.Phone} placeholder="Enter Phone No."></Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicpassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={user.password} onChange={handleinputs} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicconfirmationPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmationPassword" value={user.confirmationPassword} onChange={handleinputs} placeholder="Re-Enter Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" type="submit" onClick={postdata}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <Link to="/Login" className="text-primary fw-bold">Sign In</Link>
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
export default Register