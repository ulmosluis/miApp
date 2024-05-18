import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-800 w-2/6 h-10'>
   <h1 className='text-3x1 font-bold underline'>
    Hello world!
   </h1>
      </div>
    </>
  )
}

export default App
