import logo from './logo.svg';
import './App.css';
import RegistrationForm from './component/forms/RegistrationForm.js';
import './component/forms/style.css';
import { useHistory } from 'react-router-dom';
import Admin from './component/forms/Admin';
import BasicForm from './component/forms/BasicForm';
import AddNewTask from './component/forms/AddNewTask';
import User from './component/forms/User';
import React, {useState} from 'react';
import './component/forms/style.css';
import {Routes, Route, useNavigate, BrowserRouter as Router} from 'react-router-dom';
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { redirect } from "react-router-dom";
import { NavLink, Navigate } from 'react-router-dom'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<BasicForm />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/RegistrationForm" element={<RegistrationForm />} />
      <Route path="/User" element={<User/>} />
      <Route path="/AddNewTask" element={<AddNewTask/>} />
    </Routes>
  </Router>
);


// // function App() {
// const App = () => {

//   let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//     let path = '/Admin'; 
//     navigate(path);
//     }

  
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>    
//           Welcome to Workflow Application!
//         </p>
//         <BasicForm/>



//       </header>
      


//     </div>
    
//   );
// }

export default App;
