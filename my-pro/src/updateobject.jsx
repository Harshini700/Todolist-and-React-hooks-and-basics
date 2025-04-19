import React,{useState}from 'react'
//update state of an object using react
 const Updateobject = () => {
 const[Car,setCar]=useState({year:2024,//pasing initial state js objects
                               make:"ford",
                               model:"mustang"});
 const handleYearChange=(event)=>{//{...car spread op add the properties of car+ year and the model and make can be displayed}
         setCar(c=>({...c,year:event.target.value}));
 }
 const handlemakeChange=(event)=>{
  setCar(c=>({...c,make:event.target.value})); //c=>({...c,make:event.target.value}) c-previous state {}-js object
 }
 const handlemodelChange=(event)=>{
  setCar(c=>({...c,model:event.target.value}));
 }
  return (
    <div>
      <p>Your favourite car is:{Car.year} {Car.make} {Car.model}</p>
      <input type="number" value={Car.year} onChange={handleYearChange}/><br/>
      <input type="text" value={Car.make} onChange={handlemakeChange}/><br/>
      <input type="text" value={Car.model} onChange={handlemodelChange}/><br/>

    </div>
  )
}

export default Updateobject
