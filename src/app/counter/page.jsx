"use client"

import {React, useEffect, useRef, useState} from 'react'

const counter = () => {

  const [note, setNote] = useState(true);

    // const [count, setCount] = useState(0);
    // const a = useRef(0)

    // const handleClick =() =>{
    //     setCount();
    // }

    // useEffect(() => {
    //    a.current = a.current + 1
    //     alert(`Count Was Change ${a.current}`)
    // }, []);
  return (
    <div>
       {/* <h1 className='text-green-700 mx-auto text-2xl flex items-center justify-center mt-10 mb-11'><b>{count}</b></h1>
       <button onClick={()=> {setCount(count + 1)}} className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'>Click</button> */}


      {/* {note? <button onClick={()=> {setCount(count + 1)}} className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'>Click</button> : <h1 className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'><b>i am not working because i am false</b></h1> }

      {note && <button onClick={()=> {setCount(count + 1)}} className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'>Click</button>} */}


     <h1 className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'> {note ? "I AM TRUE" : "I AM FALSE"}

      <button onClick={()=> {
        setNote(!note)
      }} className='text-white font-serif mx-auto text-2xl flex items-center justify-center mt-10 mb-11 bg-blue-700 px-10 py-3 rounded-full'>Change</button>
     </h1>

    </div>
  )
}

export default counter