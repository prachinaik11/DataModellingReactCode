import React, {useState} from 'react';
// import RegistrationForm from './RegistrationForm';
import './style.css';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import { Link } from "react-router-dom";

import logo from 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/logo.svg';
import 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/App.css';


// function BasicForm() {
const User = () => {
    // const navigate = useNavigate();

    // const history = useHistory();

    return(

        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>    
          User Login
        </p>
        <div className="form">
            <div className="form-body">
                <div>User Login</div>
            </div>
            <div className="view">
                  <label className="form__label" for="email">View the Task instances  </label>
                  <button type="submit" class="btn">VIEW</button>
              </div>
              <div className="create">
                  <label className="form__label" for="email">Instantiate a new Workflow  </label>
                  <button type="submit" class="btn">CREATE</button>
              </div>
        </div>
        </header>
      


      </div>   
    )       
}

export default User;