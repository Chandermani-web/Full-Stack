import React, { useState , useCallback , useEffect, useRef } from 'react'
import './App.css'

const App = () => {
  const [pwd, setpwd] = useState("nvdfn")
  const [length, setlength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const pwdRef = useRef();

  const pwdgenerator = useCallback(()=>{
    let pass = ""
    let allAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllow) allAlphabets += "0123456789";
    if(charAllow) allAlphabets += `"!@#$%^&*<>?/.:;"'|\{}[](),`;
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * allAlphabets.length)
      pass += allAlphabets.charAt(char)
    }
    setpwd(pass);
  } , [length, numberAllow , charAllow ])
  
  // useEffect(()=>{pwdgenerator()},[length,charAllow,numberAllow])

  const copyToClipboard = useCallback(()=>{
    pwdRef.current?.select();
    navigator.clipboard.writeText(pwd);
  },[pwd])
  
  return (
    <>
     <div className="container">
      <div className='input-container'>
        <input type='text' value={pwd} ref={pwdRef} onChange={(e)=>setpwd(e.target.value)} readOnly placeholder='password'/>
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='btn-container'>
        <div className='range-container'>
          <input type="range" min={6} max={20} value={length} id='range' onChange={(e)=>setlength(e.target.value)} />
          <label htmlFor='range'>Length({length})</label>
        </div>
        <div className='num-container'>
          <input type='checkbox' id='number' Checked={numberAllow} onChange={()=>{setnumberAllow((prev)=>!prev)}} />
          <label htmlFor='number'>Number</label>
        </div>
        <div className='char-container'>
          <input type='checkbox' id='checkbox' Checked={charAllow} onChange={()=>{setcharAllow((prev)=>!prev)}} />
          <label htmlFor='checkbox'>Character</label>
        </div>
      </div>
      <div className='generate-btn-cont'>
        <button onClick={pwdgenerator} className='generate-btn'>Generate Button</button>
      </div>
    </div> 
    </>
  )
}

export default App
