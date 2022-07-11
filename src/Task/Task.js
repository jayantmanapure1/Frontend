import React  from "react";
import "./Task.css";
import axios from "axios";
import { Link } from "react-router-dom";
 function Task(props){
   function deleteTask(id){
       axios.post('/delete',{id: id}).then((res)=>{
         alert("Task deleted  successfully!");
         window.location.reload();
       })

   }
   return(
      <div className="task_countainer">
         
         <h3>ID:{props.id}</h3>
         <h4>TITLE: {props.title} {props.emoji}</h4>
         <p>DESCRIPRION: {props.description}</p>
         <p>PRIORITY: {props.priority}</p>
         <p><button onClick={(e)=>{deleteTask(props.id)} }className="delete">Delete</button>
            <Link to={`/update/${props.id}`}>
               <button className="update">Update</button>
            </Link>
         </p>
         
         
         
      </div>
     
   )
 }
 export default Task;