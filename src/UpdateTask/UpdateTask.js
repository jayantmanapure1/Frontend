import React  from "react";
import "./UpdateTask.css";
import {useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
 function UpdateTask(props){

   const {id}= useParams()
   const[title,setTitle] = useState('');
   const[description,setDescription] = useState('');
   const[priority,setPriority] =useState('');
   const[emoji,setEmoji] = useState('');
 useEffect(()=>{
    axios.post('/get_task',{id:id}).then((res)=>{
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
      setPriority(res.data.data.priority);
      setEmoji(res.data.data.emoji);
    })
 },[id])
   function updateTask(){
     axios.post('/update_task', {id:id, 
      title:title,
       description:description, 
       priority:priority, 
       emoji:emoji}).then((res)=>{
         alert("task update successfully!")
         window.location="/"
       })
   }

   
   return(
      <div >
          <h1>UpdateTask: {id}</h1>
         <div className="main_div">
            <form>
            <table className="table_content">
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
            <button type="button" onClick={updateTask} className="add">Update Now</button>
            </form>
            
         </div>
      </div>
   )
 }
 export default UpdateTask;