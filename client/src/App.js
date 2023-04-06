// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom'
import Navbarr from './componenets/Navbar';
import Home from './componenets/Home';
import AboutMe from './componenets/AboutMe';
import Register from './componenets/Register';
import Login from './componenets/Login';
import Reqser from './componenets/Reqser';
import Logout from './componenets/Logout';
import Landingpage from './componenets/Landingpage';
import AgentRegister from './componenets/AgentRegister';
import Serreqs from './componenets/Serreqs';
import AgentLogin from './componenets/AgentLogin';
import UserRequests from './componenets/UserRequests';
import AgentPendingRequests from './componenets/AgentPendingRequests';
import AgentLogout from './componenets/AgentLogout';

function App() {
  return (
    <>
    <Navbarr/>

    <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/AboutMe' element={<AboutMe/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Reqser' element={<Reqser/>}></Route>
      <Route path='/UserRequests' element={<UserRequests/>}></Route>
      <Route path='/Logout' element={<Logout/>}></Route>
      <Route path='/AgentRegister' element={<AgentRegister/>}></Route>
      <Route path='/AgentLogin' element={<AgentLogin/>}></Route>
      <Route path='/AgentLogout' element={<AgentLogout/>}></Route>
      <Route path='/Serreqs' element={<Serreqs/>}></Route>
      <Route path='/ReqofuserRequests' element={<AgentPendingRequests/>}></Route>
    </Routes>
   
    </>
  );
}

export default App;
