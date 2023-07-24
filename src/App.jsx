import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/Clickcounter'
import HoverCounter from './components/HoverCounter'

function App() {

  return (
    <>
      Hello World.
      <HoverCounter/>
      <ClickCounter/>
    </>
  )
}

export default App
