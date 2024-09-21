"use client"
import React, {useState} from 'react'

const server = () => {

    const [name, setName] = useState('');

    const handleChanges=(event)=>{
        setName(event.target.value);
    }
  return (
    <div>
        <input className='mt-10 mb-28 ml-80 font-serif text-2xl border  flex justify-center items-center px-40 py-5 ' type="text" name="name" id="name" placeholder='Enter your name' value={name} onChange={handleChanges} />
        <p className='text-2xl font-serif justify-center flex items-center'>Your Name is: <b>{name}</b></p>
    </div>
  )
}

export default server