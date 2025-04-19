//updater fn-a fn passed as an argument to setstate() usually
// ex.setYear(year+1)--setyear(updater fn)-updater fn--generally represented by arrow fn
// allow for safe updates based on the previous state
// used with multiple state updates and asynchronous functions
// good practice to use updater functions

import React,{useState} from 'react';
const Updater = () => {
 const[cnt,setCnt]=useState(0);
 const increment=()=>{
    //uses the CURRENT STATE to calculate NEXT STATE
    //set functions do not trigger an update
    //React batches together state updates for performance reasons
    //next state becomes the CURRENT STATE after an update
    setCnt(cnt=>cnt+1);//updater fn
    setCnt(cnt=>cnt+1);//updater fn
    setCnt(cnt=>cnt+1);//updater fn
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

export default Updater
