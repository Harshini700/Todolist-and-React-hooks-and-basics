// color picker program
import React,{useState} from 'react'
import './index.css';

const Colorpicker = () => {
 const[color,setColor]=useState("#FFFFFF");
 const handlecolorchange=(event)=>{
    setColor(event.target.value)
 }
  return (
    <div className='color-picker-container'>
      <h1>Color Picker </h1>
      <div className='color-display' style={{backgroundColor:color}}>
         <p>Selected color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handlecolorchange}/>
    </div>
  )
}

export default Colorpicker;
