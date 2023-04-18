    import React, {useState} from 'react';
    import './style.css';
    // import {useNavigate} from "react-router-dom"
    import logo from 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/logo.svg';
    import 'C:/Users/naikp/Desktop/DMproject/react/reactjs/src/App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Admin from './Admin';


    const AddNewTask = () => {

        // let navigate=useNavigate()

        /////STORE data in state
        const [task, setTask] = useState(
            {
                description:"",
                role:""
            }
        );

        const{description,role} = task;

        const onInputChange=(e) =>{
            console.log({...task, [e.target.name]:e.target.value});
            setTask({...task, [e.target.name]:e.target.value});
        };

        const onSubmit=async (e)=>{
            e.preventDefault();
            await axios.post("http://localhost:9191/task/addTaskUsingRole/1", task);
            
            // await axios.post("http://localhost:9191/task/addTaskUsingRole/1", {
            //     description:"from code",
            //     role:"hehe"
            //   })
            //   .then((response) => {
            //     setTask(response.data);
            //   });

            // navigate("/Admin") ;
        };



         ////Select option
        // const getInitialState = () => {
        //     const value = "UserID";
        //     return value;
        // };
        // const [value, setValue] = useState(getInitialState);
        // const handleChange = (e) => {
        // setValue(e.target.value);
        // };


        return(
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>    
            Add New Task
            </p>
            
            <div className="form">
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-body">
            <div>
            Add New Task
            </div>
            <div>
            <label className="form__label" >Enter description for task: </label>
            {/* <textarea name="description" rows="4" cols="50" placeholder="description" value={description}
            onChange={(e)=>onInputChange(e)}> </textarea> */}


             <input className="form__input" type={"text"} name="description" 
             Value={description}  onChange={(e)=>onInputChange(e)}  />
            {/* </p> */}
            </div>

            <div>Choose User/Role  :  uncomment later  
                {/* commented */}
            {/* <select value={value} className="select_option" id="role" onChange={handleChange}> 
                  <option value="UserID">UserID</option>
                  <option value="Role">Role</option>
            </select> */}
            {/* <p>{`Please enter ${value} :`}  */}


            <p>{`Please enter Role name :`} 

            <input className="form__input" type="text" name="role" 
            Value={role}  onChange={(e)=>onInputChange(e)} /></p>
            </div>
            {/* Choose User/Role */}
            
            </div>
            <div class="footer">
            <button type="submit" class="btn">Add task</button>
            </div>
            </form>
            </div> 
            
            </header>
            </div>    
            )       
        }
        export default AddNewTask;