import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
const Home = () => {

  function CustomToggle({children,eventKey}){
    const deconclick = useAccordionButton(eventKey,()=>
    console.log('totally custom!'),
    );
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={deconclick}
      >
        {children}
      </button>
    );
  }
  return (
    
    <>
    <div style={{display: 'flex',  alignItems: 'center',justifyContent:"center"}}>Welcome to Project Introduction</div><br></br>
      <Accordion defaultActiveKey="3">
      <Card className='mr-3 ml-3'>
        <Card.Header >
          <CustomToggle  eventKey="0" >Introduction Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" className='mr-2 ml-2'>
          <Card.Body>An online service system is a digital platform that provides services to customers via the internet. This system allows customers to access and use services without visiting a physical location. Online service systems have become increasingly popular due to their convenience, accessibility, and cost-effectiveness.<br></br><br></br>

Online service systems can offer a wide range of services such as e-commerce, online banking, online education, and online customer support. These services are usually available 24/7, which means customers can access them anytime from anywhere in the world.
The main components of an online service system include a website or application for customers to access the services, a database to store customer information and service data, and a payment gateway for secure online transactions.<br></br><br></br>

Online service systems provide many benefits for both customers and service providers. Customers can easily access services without the need to travel or wait in long queues. Service providers can reduce costs by automating processes and providing self-service options for customers.
However, online service systems also come with their challenges such as data security, system downtime, and technical support. Therefore, it is essential to have proper security measures, backup systems, and customer support in place to ensure the system is reliable and efficient.<br></br><br></br>

Overall, an online service system is an effective way to provide services to customers, and it is expected to become even more prevalent as technology continues to advance.

</Card.Body>
        </Accordion.Collapse>
      </Card><br></br>
      <Card className='mr-3 ml-3'>
        <Card.Header>
          <CustomToggle eventKey="1">Continued.. Intro Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Purpose of the system: In this project, The Purpose is to use the end-to-end service i.e., giving time and labor to accomplish service requests from the community at the individual level where anyone can provide service in exchange for money, they could do that too. It can be termed paid volunteering. Two peoples are the users one requests service and the other provides service. <br></br><br></br>
          Scope of the System:  In this project, the customers /user profile module is where each registered individual can request services. And on the other hand, the agent/consultant profile module of the system can provide the service, requested by the user on the system. <br></br><br></br>
          Objectives of the project<br></br>

In this project,<br></br>


•	Provide infrastructure to the admin where they can allow new agents to the system. By verifying the personal information.<br></br>
•	Providing infrastructure for customers & consultants to register themselves in the system & keeping their records safe.<br></br>
•	Providing a framework to customers where everyone can request a series of services with respect to the dates and delete their service requests on the go. & Give ratings to the agents.<br></br>
•	Providing a framework for agents to accept service requests from customers. If they want to raise the amount due service it can be an option.<br></br>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion></>
  )
}

export default Home