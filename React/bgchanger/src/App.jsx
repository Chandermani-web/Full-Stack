import React from 'react'
import "./App.css"

const App = () => {
  const changeBackgroundColor = (color) => {
    document.body.style.background = color;
  }

  return (
    <div>
      <h1>Background Color Changer</h1>
      <p>Click the button below to change the background color.</p>      
      <div className='color-container'>
        <button style={{background: "linear-gradient(90deg, #ff7e5f 50%, #feb47b 50%)"}} onClick={() => changeBackgroundColor("linear-gradient(90deg, #ff7e5f 50%, #feb47b 50%)")}></button>
        <button style={{background: "linear-gradient(90deg, #6a11cb 50%, #2575fc 50%)"}} onClick={() => changeBackgroundColor("linear-gradient(90deg, #6a11cb 50%, #2575fc 50%)")}></button>
        <button style={{background: "linear-gradient(90deg, #ff6a00 50%, #ee0979 50%)"}} onClick={() => changeBackgroundColor("linear-gradient(90deg, #ff6a00 50%, #ee0979 50%)")}></button>
        <button style={{background: "linear-gradient(90deg, #00c6ff 50%, #0072ff 50%)"}} onClick={() => changeBackgroundColor("linear-gradient(90deg, #00c6ff 50%, #0072ff 50%)")}></button>
      </div>
    </div>
  )
}

export default App
