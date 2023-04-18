import React, {useState} from 'react';
import './style.css';
// import {useNavigate} from "react-router-dom"
import logo from 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/logo.svg';
import 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/App.css';


// function RegistrationForm() {
const RegistrationForm = () => {

    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>    
          Welcome to Workflow Application!
        </p>

      <div className="form">
        
          <div className="form-body">
            <div>
                Registration Form
            </div>
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>     
      </header>
      


      </div>    
    )       
}
export default RegistrationForm;