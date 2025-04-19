import React from 'react'
import './index.css'
import ComponentC from './componentC'
const ComponentB = () => {
  return (
    <div className='box'>
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentB
