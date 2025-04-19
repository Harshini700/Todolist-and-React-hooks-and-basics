import React from 'react'
import List from './list'
import Button from './Button'
import Profile from './profile'
import Mycomponent from './Mycomponent'
import Counter from './counter'
import Mycomponent2 from './Mycomponent2'
import Colorpicker from './colorpicker'
import Updater from './updater'
import Updateobject from './updateobject'
import Updatearray from './updatearray'
import Arrobj from './arrobj'
import Useeffect from './useeffect'
import ComponentA from './componentA'
import UseRef from './useRef'
import Todolist from './Todolist'

//props=read-only-properties that are share b/n components
//  a parent comp can send data to a child comp
//  <component key=value />

//proptypes=a mechanism that ensure that the passed value is of 
// the correct datatype
// age:Proptypes.number

//deafaultprops=default values for props in case they are 
// not passes from the parent component
// name:"Guest"

//conditional rendering=allows you to control what gets rendered
// in your application based on certain conditions
//(show,hide,or change components)

//click event=an interaction when a user clicks on a specific element
// we can respond to clicks by passing
// a callback to the onclick event handler

//React hook=special fn that allows functional components 
// to use react feature without writing class components (React v16.8)
// (useState,useEffect,useContext,useReducer,useCallback,and more..)

//useState()=a react hook that allows the creation of a stateful variable
// and a SETTER fn to update its value in the virtual DOM
// [name,SetName//setter function]

//onchange=event handler used primarily with form elements
// ex<input>,<textarea>,<select>,<radio>
// triggers a function every time the value of the input changes

//useEffect()=react hook that tells react DO SOME CODE WHEN(pick one):
// this component re-renders
// this component mounts
// the state of a value

//useEffect(function,[dependencies]) //-[]-arr dependencies,[]- arr
//1.useEffect(()=>{})   //runs after every re-render
//2.useEffect(()=>{},[]) //runs only on mount
//3.useEffect(()=>{},[value]) //runs on mount+when value changes

//USES
//#1 Event Listeners
//#2 DOM manipulation
//#3 subscriptions(real-time updates)
//#4 fetching data from an API
//#5 Clean up when a component unmounts //unmount-removing elements from DOM //mount-adding elements into DOM

//useContext()=React hook that allows you to share values
// between multiple levels of components
// without passing props through each level

const App = () => {
  {/*const fruits=[{id:1,name:"apple",calories:10},
   {id:2,name:"mango",calories:36},
    {id:3,name:"Grapes",calories:37},
    {id:4,name:"pineapple",calories:38}
  ]
  const vegetables=[{id:6,name:"potato",calories:110},
    {id:7,name:"celery",calories:15},
    {id:8,name:"carrots",calories:25},
    {id:9,name:"corn",calories:63}
  ]*/}
  return (
    <div>
      {/*<Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Button/>*/}
      {/*parent component Student name="Harshini- keys and values pairs if any value other than string we want to enclose in{} "*/}
      {/*<Student name="Harshini" age={30} isStudent={true}/>
      <Student name="patrick" age={42} isStudent={false}/>
      <Student name="dharshini" age={50} isStudent={false}/>
      <Student name="Lorry"/>{/*default props
      <UserGreetings  isLoggedIn={true} username="harshini" />*/}
      {/*rendering a list */} {/*fruits.length>0 && - short circuiting */}
      {/*{fruits.length>0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length>0 && <List items={vegetables} category="vegetables"/>}*/}
      {/*<Button/>
      <Profile/>*/}
      {/*<Counter/>
      <Mycomponent2/>
      <Colorpicker/>
      <Updateobject/>
      <Updatearray/>
      <Arrobj/>
      <Useeffect/>
      <ComponentA/>
      <UseRef/>*/}
      <Todolist/>
      
    </div>
  )
}

export default App
