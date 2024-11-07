import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Card from './Component/Card'
import Footer from './Component/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-100'>
        <div className='mb-16'>
          <Navbar></Navbar>
        </div>
        <div className=' bg-white shadow-lg h-[650px] rounded-lg p-5'>
          <Card></Card>
        </div>
        <div className=''>
          <Footer></Footer>
        </div>
      </div>

    </>
  )
}

export default App
