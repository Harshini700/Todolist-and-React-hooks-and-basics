//update state of an array using react
import { element } from 'prop-types';
import React,{useState} from 'react'

const Updatearray = () => {
    const[foods,setFood]=useState(["apple","orange","Banana"]);
    const addFood =()=>{
        const newFood=document.getElementById("foodinput").value;
        document.getElementById("foodinput").value="";
        setFood(f=>[...f,newFood]); // updater fn f-previous state
    }
    const removeFood=(index)=>{
        setFood(foods.filter((_,i)=>i!==index)); // _ -parameter passed to fn is ignored
    }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {/*{foods.map((food,index) => <li key={index}>{food}</li>)}*/}
        {foods.map((food,index) => 
        <li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodinput" placeholder='Enter food name'/>
      <button onClick={addFood}>Add Food</button>
    </div>
  )
}

export default Updatearray
