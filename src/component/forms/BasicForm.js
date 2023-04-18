import React, {useState} from 'react';
import RegistrationForm from './RegistrationForm';
import Admin from './Admin';
import User from './User';
import './style.css';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import logo from 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/logo.svg';
import 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/App.css';

let path = '/Admin'; 

function BasicForm() {
// const BasicForm = () => {
    // let path = '/Admin'; 
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    // let path = '/Admin'; 
    navigate(path);
    }


    ////Select option
    const getInitialState = () => {
        const value = "Admin";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const handleChange = (e) => {
        path = '/' + e.target.value;
        setValue(e.target.value);
      };

    // const navigate = useNavigate();

    // const history = useHistory();

    return(

            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>    
          Welcome to Workflow Application!
        </p>
      <div className="form">
          <div className="form-body">
          <div>Type of User  : 
            <select value={value} className="select_option" id="role" onChange={handleChange}> 
                  <option value="Admin">Admin</option>
                  <option value="SalesOfficer">Sales Officer</option>
                  <option value="User">User</option>
            </select>
            {/* <p>{`You selected ${value}`}</p> */}
            </div>
              <div className="email">
                  <label className="form__label" for="email">Email  </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              {/* <button onClick={()=>navigate("/Admin")}>Login admin</button> */}
              <button color="primary" onClick={routeChange}>Login</button>
          </div>
          <br></br>
          <div class="footer">
              {/* <button type="submit" class="btn" onClick={()=>navigate("/RegistrationForm")}>Register</button> */}
              {/* <Button onClick={()=> history.push("/RegistrationForm")}>Click me!</Button> */}

              {/* <button type="submit" class="btn">Register</button> */}
              
              <Link to="/RegistrationForm">Registration (Admin access only)</Link>
              
              {/* <RegistrationForm/> */}
             
              <Routes>
                <Route path="/RegistrationForm" element={<RegistrationForm/>} />
                {/* <Route path='/RegistrationForm' element={ <navigate to="/RegistrationForm" /> }/> */}
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/User" element={<User/>} />
              </Routes>
          </div>
      </div>   
            </header>
      


    </div>   
    )       
}

export default BasicForm;