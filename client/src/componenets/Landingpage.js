import React from 'react'
import { Link } from 'react-router-dom'
const Landingpage = () => {
  return (
   <>

<div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>Online service provider is a service to the community or an individual. This could be an act of an individual or group freely giving time and labor to community service. Service persons are the ones who have a specific skill set in their domain Ex – Electrician is a trade person specializing in electrical wiring in building. The problem I discovered in service-based job that they are commoditized i.e., the workers not get paid enough is that most of the activities are run by big organizations like Urban Company and they take the lead in charge of what should be done., so the service man does not get recognition as much as they deserve and all the credit were taken by the organization and then get paid on monthly for their entire work at once.  And this should be eliminated. So, the purpose is to make this act of Service provider one on one, which means Community or Individual people who need some help can seek from other individuals to fulfill their needs. The significant result that could be found in this model is that we can see workmanship rise once again in every citizen's heart of our country.</p>
        <span>All this could be done by a single technology where people meet people to help each other through the Online Service system where one could request service. On the other hand, registered Service men can come individually to accept the request and fulfill the requirement. The system can be paid or unpaid which allows the service man to earn some additional cash doing the service expected feature. The significance here is that there is no middlemen or organization to lead the service men anybody can be a volunteer and provide service to an individual or community. </span><br></br><br></br>
        <Link className='btn btn-primary btn-lg' to="/Home" role="button"><span>About Project &raquo;</span></Link>
      </div>
    </div>

    <div class="container">
      {/* <!-- Example row of columns --> */}
      <div class="row">
        <div class="col-md-4">
          <h2>Front-End Tech</h2>
          <p>Technology Used as Front-end </p>
          <ul>
            <li>ReactJs</li>
            <li>Bootstrap - 4.0v</li>
          </ul>
          {/* <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
        </div>
        <div class="col-md-4">
          <h2>Back-end Tech</h2>
          <p>Technology Used as Back-end</p>
          <ul>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>Javascript</li>
          </ul>
          {/* <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
       </div>
        <div class="col-md-4">
          <h2>Database</h2>
          <ul>
            <li>MongoDB</li>
          </ul>
          {/* <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
        </div>
      </div>

      <hr/>

      <footer>
        <p>&copy; 2023 BCA Project by Koruprolu Goutam Kumar, Inc.</p>
      </footer>
    </div> 
    {/* <!-- /container --> */}

   </>
  )
}

export default Landingpage