import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mb-24'>
        <Navbar></Navbar>
      </div>
      <div>
        <Home></Home>
      </div>

    </>
  )
}

export default App
