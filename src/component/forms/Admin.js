import React, {useEffect, useState} from 'react';
import AddNewTask from './AddNewTask';
import './style.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

import logo from 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/logo.svg';
import 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/App.css';
import axios from 'axios';

let path = '/AddNewTask'; 
function Admin() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    // let path = '/Admin'; 
    navigate(path);
    }

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        loadTasks();
    },[]);

    const loadTasks=async()=>{
        const result = await axios.get("http://localhost:9191/task/fetchTaskList/1");
        // console.log(result.data);
        setTasks(result.data)
    }
// const Admin = () => {
    // const navigate = useNavigate();

    // const history = useHistory();

    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>    
          Admin Login
        </p>
        <div className="form">
            <div className="form-body">
                <div>Admin Login</div>
            </div>
            <div className="btn">
                  <label className="form__label" for="email">View the Workflows  </label>
                  <button type="submit" class="btn">VIEW</button>
              </div>
              <div className="btn">
                  <label className="form__label" for="email">Create a new Workflow  </label>
                  <button type="submit" class="btn">CREATE</button>
            </div>

            <div className="btn">
                  <label className="form__label" for="email">Add a new task  </label>
                  <button type="submit" class="btn" onClick={routeChange}>NEW TASK</button>
            </div>
                
             
                <div className="table">
                <p>    
                Tasks Description
                </p>
                <table>
                    <tr>
                        <th>Index</th>
                        <th>Task ID</th>
                        <th>Description</th>
                        <th>Role</th>
                        <th>User Authorized</th>
                    </tr>
                    {
                        tasks.map((task, index) =>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{task.taskId}</td>
                                <td>{task.description}</td>
                                <td>{task.role}</td>
                                <td>{task.userAuthorized}</td>                                
                            </tr>
                        )
                        )
                    }                  
       
                </table>
                </div>
                <Routes>
                <Route path="/AddNewTask" element={<AddNewTask/>} />
              </Routes>
        </div>
        </header>
      

    </div>   
    )       
}

export default Admin;