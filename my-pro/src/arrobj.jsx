//update state of an array object

import React,{useState} from 'react'

const Arrobj = () => {
    const [cars,setCar]=useState([]); // initial state-empty arr
    const [caryear,setcarYear]=useState(new Date().getFullYear()); // initial state-initial year
    const [carmake,setcarMake]=useState(""); // initial state-empty string
    const [carmodel,setcarModel]=useState("");
    const handlecar=()=>{
        const newCar={year:caryear,make:carmake,model:carmodel};
        setCar(c=>[...c,newCar]);
        setcarYear(new Date().getFullYear());
        setcarMake("");
        setcarModel("");

    }
    const handleRemovecar=(index)=>{
         setCar(c=>c.filter((_,i)=>i!=index)); //i-index
    }
    const handleYearchange=(event)=>{
       setcarYear(event.target.value);

    }
    const handleMakechange=(event)=>{
         setcarMake(event.target.value);
    }
    const handleModelchange=(event)=>{ 
        setcarModel(event.target.value);

    }

  return (
    <div>
      <h2>List of Car Objects</h2>
       <ul>
          {cars.map((car,index)=>
          <li key={index} onClick={()=>{handleRemovecar(index)}}>
            {car.year} {car.make} {car.model}
            </li>)}
      </ul>
      <input type="number" value={caryear} onChange={handleYearchange} /><br/>
      <input type="text" value={carmake} onChange={handleMakechange} 
                     placeholder='Enter Car make'/><br/>
      <input type="text" value={carmodel} onChange={handleModelchange}
                        placeholder='Enter Car model' /><br/>
      <button onClick={handlecar}>Add Car</button>
    </div>
  )
}

export default Arrobj
