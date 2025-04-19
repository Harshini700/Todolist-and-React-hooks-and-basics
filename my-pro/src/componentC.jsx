import React, { useState } from 'react'
import './index.css'
import ComponentD from './componentD'

const ComponentC = () => {
  return (
    <div className='box'>
      <h1>ComponentC</h1>
      <ComponentD />
    </div>
  )
}

export default ComponentC
