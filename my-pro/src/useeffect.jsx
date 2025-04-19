import React,{useState,useEffect} from 'react'

const Useeffect = () => {
    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green");
    const handleclick=()=>{
       setCount(c=>c+1);
    }
    const sub=()=>{
        setCount(c=>c-1);
     }
     const changecolor=()=>{
        setColor(c=> c === "green"?"red":"green");
     }
    useEffect(()=>{
        document.title=`count:${count} ${color}`;
    },[count,color]);//[arr dependency]
  return (
    <div>
      <p style={{color}}>Count:{count}</p>
      <button onClick={handleclick}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button  onClick={changecolor}>Change Color</button>
    </div>
  )
}

export default Useeffect
