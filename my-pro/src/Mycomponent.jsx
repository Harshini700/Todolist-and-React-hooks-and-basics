import React from 'react'
import{useState} from 'react' //{usestate-importing necessay module from react using object destructuring without importing whole module}
const Mycomponent = () => {
    //const[]-arr destructuring to destruct  two elements(cnt,setcnt)
    //useState("guest") --Guest-initial state
    //for setter fn camel case should be used start with lower then no space and upper
    const[name,setName]=useState(); //returns a arr with two elements variables and setter fn
    const [age,setAge]=useState(0);
    const[isEmployed,setIsEmployed]=useState(true); //boolean var to tagle true or false
    const updateName=()=>{
        //name="Harshini";
        //console.log(name); if we are assigning  a name it is changing in console and not displaying in browser so we want to use setter fn
          setName("Harshini");//when we use setter fn of stateful variable it will trigger a render of the virtual dom
    }
    const updateAge=()=>{
        setAge(age+2);
    }
    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>

      <p>Age:{age}</p>
      <button onClick={updateAge}>Increment Age</button>

      <p>Is employed:{isEmployed ? "Yes":"No"}</p>{/*isEmployed ? "Yes":"No" - using conditional rendering without directly using boolean var*/}
      <button onClick={toggleEmployedStatus}>Toggled status</button>
    </div>
  )
}

export default Mycomponent
