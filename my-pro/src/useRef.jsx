//useState()=re-renders the component when the state value changes.
//useRef()="use Reference" does not cause re-renders when its value changes
//           when you want a component to "remember" some information
//           but you don't want that information to trigger new renders
//           1.Accessing/Interacting with DOM elements
//           2.Handling Focus,Animation and Transitions
//           3.Managing Timers and Intervals
import  React,{useEffect,useRef} from 'react'

const UseRef = () => {
 const inputRef=useRef(null); //useref returns a ref obj with a single curr property 
 // initially set to the initial value you provided
 
  useEffect(()=>{
    console.log("COMPONENT RENDERED");
    console.log(inputRef);
  });
  const handleclick=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="yellow";
  }
  return (
    <div>
      <button onClick={handleclick}>
          Click me!
      </button>
      <input ref={inputRef}/>{/* the curr prop of ref obj can also refer to html elem */}
      {/*ref attribute of html element is used to create reference to elements */}
    </div>
  )
}

export default UseRef
