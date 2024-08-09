import { useState } from 'react'
import Content from './Content'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>

      <div className='h-4/6 w-28 fixed top-44 right-16 border-black border-2 bg-yellow-400 rounded-xl flex flex-col justify-evenly items-center'>
          <button onClick={()=>setColor("green")} className='h-8 w-20 bg-green-600 flex justify-center items-center rounded-lg text-white active:bg-green-400'>Green</button>
          <button onClick={()=>setColor("#fb6f92")} className='h-8 w-20 bg-pink-600 flex justify-center items-center rounded-lg text-white active:bg-pink-400'>Pink</button>
          <button onClick={()=>setColor("red")} className='h-8 w-20 bg-red-600 flex justify-center items-center rounded-lg text-white active:bg-red-400'>Red</button>
          <button onClick={()=>setColor("#fca311")} className='h-8 w-20 bg-yellow-600 flex justify-center items-center rounded-lg text-white active:bg-yellow-400'>Yellow</button>
          <button onClick={()=>setColor("#fb5607")} className='h-8 w-20 bg-orange-600 flex justify-center items-center rounded-lg text-white active:bg-orange-400'>Orange</button>
          <button onClick={()=>setColor("purple")} className='h-8 w-20 bg-purple-600 flex justify-center items-center rounded-lg text-white active:bg-purple-400'>Purple</button>
          <button onClick={()=>setColor("blue")} className='h-8 w-20 bg-blue-600 flex justify-center items-center rounded-lg text-white active:bg-blue-400'>Blue</button>
      </div>
      <Content></Content>
    </div>
  )
}

export default App
  