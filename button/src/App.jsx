import { useState } from 'react'

import './App.css'

function App() {
  const[Color,setColor] =useState("#ff2b05")
function changecolor(){
    setColor("#ff638c");

  }

  return (
    <>
      <button onClick={changecolor} style={{backgroundColor :Color}} >Submit</button>
    </>
  )
}

export default App
