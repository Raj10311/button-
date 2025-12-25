import { useState } from 'react'

import './App.css'

function App() {
  const[Color,setColor] =useState("#ff2b05")
  const[count,setCount] =useState(0)
  
function changecolor(){
    setColor("#ff638c");

  }
function counter(){
  setCount(count+1)
}
function Reset(){
  setCount(0)
  setColor("#ff2b05")
}

  return (
    <>
      <button onClick={changecolor} style={{backgroundColor :Color}} >Submit </button>
      <button onClick = {counter} >Button {count}</button>
      <button onClick = {Reset} >Reset</button>
    </>
  )
}

export default App
