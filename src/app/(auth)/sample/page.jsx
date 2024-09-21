"use client"

import React, { useState } from 'react';

const Sample = () => {

  const [text, setText] = useState("");

  const handleClickToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleClickToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClickToClearCase = () => {
    setText('');
  }

  const handleRemoveSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  }

  const handleClickToCopyCase = () => {
    navigator.clipboard.writeText(text);
  }

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  }

  const handleCapitalizeFirstLetter = () => {
    let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setText(newText);
  }


  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='flex flex-col w-full h-screen justify-center items-center'>
        <h1 className='text-3xl font-serif text-blue-700'>TextUtils</h1>
        <textarea 
          onChange={handleChange} 
          className='border border-separate border-x bg-slate-200 w-[70vw] px-9 py-4 mt-10 mb-10 h-[40vh] text-xl font-serif' 
          value={text} 
          name="text" 
          id="text"
        ></textarea>

        <div className="flex flex-wrap gap-2">
          <button disabled={text.length === 0} onClick={handleClickToUpperCase} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>ChangeToUpperCase</button>
          <button disabled={text.length === 0} onClick={handleClickToLowerCase} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>ChangeToLowerCase</button>
          <button disabled={text.length === 0} onClick={handleClickToClearCase} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>Clear Text</button>
          <button disabled={text.length === 0} onClick={handleClickToCopyCase} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>Copy Text</button>
          <button disabled={text.length === 0} onClick={handleRemoveSpace} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>Remove Extra Space</button>
          <button disabled={text.length === 0} onClick={handleReverseText} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>Reverse Text</button>
          <button disabled={text.length === 0} onClick={handleCapitalizeFirstLetter} className='bg-blue-700 px-3 py-2 rounded-full font-serif text-sm text-white'>Capitalize First Letter</button>
      </div>
      </div>

      <div className='-mt-24 mb-28 py-3 px-10 w-96 ml-36'>
        <h1 className='text-3xl font-serif text-blue-700'>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes Read</p>
        <h1 className='text-3xl font-serif text-blue-700'>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}

export default Sample;
