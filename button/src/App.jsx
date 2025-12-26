import { useState } from 'react'

import './App.css'
import {data} from './assets/data.js'
function App() {
  
  const[count,setCount] =useState(0)
  const[message,setMessage] =useState("")
  const[index,setIndex] =useState(0)
  
function changecolor(){
    
    setIndex(count=>(count + 1 )% data.length);
    

  }
function counter(){
  if(count<5) 
  setCount(count+1)
  else{
    setMessage("Limit reach")
    setIndex(data.length)
  }
}

function Reset(){
  setCount(0)
  setIndex(0)


}

  return (
    <>
      <button onClick={changecolor} style={{backgroundColor :data[index]}} >Submit </button>
      <button onClick = {counter} >Button {count}</button>
      <button onClick = {Reset} >Reset</button>
      <p>{message}</p>
    </>
  )
}

export default App
