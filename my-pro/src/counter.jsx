//Counter program
import React,{useState} from 'react';
import'./index.css'

const Counter = () => {
 const[cnt,setCnt]=useState(0);
 const increment=()=>{
    setCnt(cnt+1);
 }
 const decrement=()=>{
    setCnt(cnt-1);
 }
 const reset=()=>{
    setCnt(0);
 }
  return (
    <div className='counter-container'>
      <p className='count-display'>{cnt}</p>
      <button onClick={increment}className='counter-button'>Increment</button>
      <button onClick={decrement}className='counter-button'>Decrement</button>
      <button onClick={reset } className='counter-button'>Reset</button>
    </div>
  )
}

export default Counter
