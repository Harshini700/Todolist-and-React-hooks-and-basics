import React from 'react'
import{useState} from 'react'

const Button = () => {
 //const handled = ()=>console.log("ouch");
 //`${name} template literal or string for inseting values into strings or placeholder
 //const handled1 =(name)=>console.log(`${name} stop clicking me`)
 //let cnt=0;
 //const handled2=(name)=>{
    //if(cnt<3){
        //cnt++;
        //console.log(`${name} you clicked me ${cnt} times`)
    //}
    //else{
        //console.log(`${name} stop clicking me`)
    //}
    //(e)-object of the event occured
    //const handleclick=(e)=>console.log(e);
    const handleclick=(e)=>e.target.textContent="ouch"; // it will dis ouch

return (
    <div> 
      {/*<button onClick={handled}>click me</button>*/}
      {/*<button onClick={()=>handled1("harshini")}>click me</button>*/}
      {/*<button onClick={()=>handled2("harshini")}>click me</button>*/}
      {/*Doubleclick-for handling double click*/}
      <button onClick={(e)=>handleclick(e)}>click me</button>
    </div>
)
}


export default Button
