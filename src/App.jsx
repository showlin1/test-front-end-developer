import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Card from './Component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-50'>
        <div className='mb-16'>
          <Navbar></Navbar>
        </div>
        <div className=' bg-white rounded-lg p-5'>
          <Card></Card>
        </div>
      </div>

    </>
  )
}

export default App
