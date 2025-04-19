import React,{useState,useEffect} from 'react'
import './index.css'

const Todolist = () => {
  const[tasks,setTasks]=useState(["Eat Breakfast","Take a shower","Learn MERN stack"]);
  const[newTask,setnewTask]=useState("");
  const handleInputchange=(event)=>{
   setnewTask(event.target.value)
  }
  const addTask=()=>{
    if(newTask.trim()!==""){
      setTasks(t=>[...tasks,newTask]);
      setnewTask("");
    }
  }
  const deleteTask=(index)=>{
      const updatetask=tasks.filter((_,i)=>i!==index);
      setTasks(updatetask);
  }
  const moveTaskUp=(index)=>{
     if(index>0){
      const updatedtask=[...tasks];
      [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],
      updatedtask[index]];
      setTasks(updatedtask);
     }
  }
  const moveTaskdown=(index)=>{
    if(index<tasks.length-1){
      const updatedtask=[...tasks];
      [updatedtask[index],updatedtask[index+1]]=[updatedtask[index+1],
      updatedtask[index]];
      setTasks(updatedtask);
     }
  }
  return (
    <div className='to-do-list'>
      <h1>Todo-List</h1>
      <div>
        <input type="text" placeholder='Enter a task...' id="inputtask" 
        value={newTask} onChange={handleInputchange}/>
        <button className='add-button' onClick={addTask}>
          Add</button>
      </div>
      <ol>
       {tasks.map((task,index)=>
          <li>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={()=>deleteTask(index)}>
              Delete
            </button>
            <button className='move-button' onClick={()=>moveTaskUp(index)}>
             👆
            </button>
            <button className='move-button' onClick={()=>moveTaskdown(index)}>
            	👇
            </button>
          </li>
      )}
      </ol>
     
    </div>
  )
}

export default Todolist
