import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const date = new Date().toDateString();
  return (
    <div>
      <h1>Hello, React.js</h1>
      <p className="sub-text">Today's date is: {date}</p>
    </div>
  )
}

export default App
