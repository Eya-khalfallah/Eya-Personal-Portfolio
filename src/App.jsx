import { useState } from 'react'
import './App.css'
import DropAnimation from './components/DropAnimation'
import HomePage from './home/HomePage'

function App() {

  return (
    <div className='overflow-y-auto'>
       <DropAnimation />
       <HomePage /> 
    </div>
      
    
  )
}

export default App
