import { useState,useEffect,useRef } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [textcolor, setTextColor]=useState("text-fuchsia-200")

  const [color, setColor]=useState("bg-slate-700")


  // useEffect(()=>{
  //   if(setCount!=0){
  //     returnbutn.display="hidden"
  //   }
  // },[count])

  useEffect(()=>{
    switch (count) {
      case 1:
        setColor("bg-blue-400")
        setTextColor("text-red-700")
        break;
      case 2:
        setColor("bg-pink-400")
        setTextColor("text-black-700")
        break;
      case 3:
        setColor("bg-purple-400")
        setTextColor("text-green-700")
        break;
      case 4:
        setColor("bg-yellow-400")
        setTextColor("text-red-700")
        break;
      case 5:
        setColor("bg-orange-400")
        setTextColor("text-purple-700")
        break;
      case 6:
        setColor("bg-green-400")
        setTextColor("text-yellow-700")
        break;
      case 7:
        setColor("bg-red-400")
        setTextColor("text-black-700")
        break;
    
      default:
        break;
    }
  
  }
  ,[count])

  const returnHome=()=>{
    setColor("bg-slate-700")
    setTextColor("text-fuchsia-200")
    setCount(0)
  }
  

  return (
    <>
      <div className={`h-screen w-screen ${color} ${textcolor} flex justify-center flex-col items-center  gap-7`}>
        <h1 className='text-center text-3xl'>My Name is Sonu</h1>
        <p className='text-xl '>Welcome to my page {count}</p>
        <button onClick={()=>{
          if(count<7){
            setCount(count+1)
          }
        }} className='h-10 w-28 border-2  border-black rounded bg-red-300 text-zinc-900 '>Page Up</button>
        <button onClick={()=>{
          if(count>1){
            setCount(count-1)
          }
        }} className='h-10 w-28 border-2 border-black rounded bg-red-300 text-zinc-900 '>Page Down</button>
        {count !== 0 && (
          <button onClick={returnHome} className='h-10 w-28 border-2 border-black rounded bg-blue-300 text-zinc-900'>Home</button>
        )}

        

      </div>
    </>
  )
}

export default App
