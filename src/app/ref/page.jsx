"use client"
import React, { useRef } from 'react'

const ref = () => {
    const ref = useRef()
    const handleCLick =()=>{
       if (ref.current.src.includes("/image/logo.png")) {
           ref.current.src = "/image/card.jpeg"
       } else{
        ref.current.src = "/image/logo.png"
       }
    }
  return (
    <div className='flex justify-center items-center gap-52 mt-36 mb-56'>
      <img ref={ref} src="/image/logo.png" alt="image" />
      <button className='bg-green-700 rounded-full px-10 py-2 text-white' onClick={handleCLick} type="submit">Change</button>
    </div>
  )
}

export default ref