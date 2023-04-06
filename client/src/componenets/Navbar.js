import React from 'react'
import {  Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiLogInCircle,BiLogOut} from "react-icons/bi";
import {BiRegistered} from 'react-icons/bi';
import { useState } from 'react';
// import {FaUserSecret, FaUserAlt} from 'react-icons/fa'
// import logo from '../images/images.jpg'

const Navbarr = () => {
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function checklogin (){
    setIsLoggedIn(true)
  }

  return (
   <>
       <Navbar style={{border:'3px solid '}} expand="lg" bg="dark" variant="dark" className='rounded mt-2 mr-2 ml-2 mb-2' collapseOnSelect>
        <Container>
        <Navbar.Brand ><Link className="text-decoration-none text-white pl-1" to="/">Online Service Provider</Link></Navbar.Brand>
        <Navbar.Toggle variant="white" aria-expanded="false" aria-controls="responsive-navbar-nav" className='navbar-toggler mr-1'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link ><Link className="text-decoration-none text-white" to="/Home">About Project</Link></Nav.Link> */}
            <Nav.Link eventKey="1" ><Link className="text-decoration-none text-white pl-1" to="/AboutMe">Profile</Link></Nav.Link>

            <Nav.Link eventKey="2"><Link className="text-decoration-none text-white pl-1" to="/Reqser">Request a Service</Link></Nav.Link>
            {/* <Nav.Link ><Link className="text-decoration-none text-white pl-1" to="/Serreqs">Requested Service By User</Link></Nav.Link> */}

            
          </Nav>
          <Nav>
             <NavDropdown  title={ <span className="text-white pl-1"><>Logins <BiLogInCircle/></></span> } id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="3">{ isLoggedIn ? null : <Link className="text-decoration-none text-black " to="/Login"> User <BiLogInCircle/></Link>}</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item eventKey="4"> <Link className="text-decoration-none text-black" to="/AgentLogin"> Agent <BiLogInCircle/></Link></NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link ></Nav.Link> */}
            <NavDropdown title={ <span className="text-white pl-1"><>Registers <BiRegistered/></></span> }  id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="5"><Link className="text-decoration-none text-black " to="/Register">User <BiRegistered/></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="6">
              <Link className="text-decoration-none text-black" to="/AgentRegister">Agent <BiRegistered/></Link></NavDropdown.Item>
              {/* <NavDropdown.Item >
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title={ <span className="text-white pl-1"><>Logouts <BiLogOut/></></span> }  id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="7"><Link className="text-decoration-none text-black " to="/Logout">User <BiLogOut/></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="8"><Link className="text-decoration-none text-black" to="/AgentLogout">Agent <BiLogOut/></Link></NavDropdown.Item>
              {/* <NavDropdown.Item >
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link ><Link className="text-decoration-none text-white pl-1" to="/Logout">Logout</Link></Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
      
   </>
  )

}

export default Navbarr 
