import React  from "react";
import "./AddTask.css";
import axios from "axios";
import {useState} from 'react';
 function AddTask(props){
   const[id,setId]= useState();
   const[title,setTitle] = useState();
   const[description,setDescription] = useState();
   const[priority,setPriority] =useState();
   const[emoji,setEmoji] = useState();

   function addTask(){
      axios.post('/tasks',
       {id:id, 
         title:title,
          description:description, 
          priority:priority, 
          emoji:emoji}).then((res)=>{
            window.location="/"
          })
      

   }
   return(
      <div >
         <h1>AddTask</h1>
         <div className="main_div">
            <form>
            <table className="table_content">
               <tr>
                  <td>ID:</td>
                  <td> <input value={id} onChange={(e)=>{setId(e.target.value)}}></input></td>
               </tr>
               <tr>
                  <td>Title:</td>
                  <td> <input value={title} onChange={(e)=>{setTitle(e.target.value)}}></input></td>
               </tr>
               <tr>
                  <td>Description:</td>
                  <td> <input value={description} onChange={(e)=>{setDescription(e.target.value)}}></input></td>
               </tr>
               <tr>
                  <td>Priority:</td>
                  <td> <input value={priority} onChange={(e)=>{setPriority(e.target.value)}}></input></td>
               </tr>
               <tr>
                  <td>Emoji:</td>
                  <td> <input value={emoji} onChange={(e)=>{setEmoji(e.target.value)}}></input></td>
               </tr>
            </table>
            <button type="button" onClick={addTask} className="add">AddTask</button>
            </form>
            
         </div>
      </div>
   )
 }
 export default AddTask;