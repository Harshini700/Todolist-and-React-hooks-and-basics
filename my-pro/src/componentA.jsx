//PROVIDER COMPONENT //contain data what we like to acess
//1.import {createContext} from 'react';
//2.export const MyContext=createcontext();
//3.<MyContext.provider value={value}>
 //      <child />
 //  <Mycontext.provider>
 // CONSUMER COMPONENTS
 //1.import React,{useContext} from 'react';
 // import {MyContext} from './componentA';
 //2.const value=useContext(MyContext);
 //here component A-producer component
 //component D-consumer component
import React, { useState,createContext } from 'react'
import './index.css'
import ComponentB from './componentB'
 
export const UserContext=createContext();

const ComponentA = () => {
  const[user,setUser]=useState("Harshini");
  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
          <ComponentB user={user}/> {/* wrapping of child component data */}
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
