import './App.css';
import Navbar from './Component/Navbar'
import MyInputBox from './Component/MyInputBox'
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState("white");

  const tooggleMode = () => {
    if(mode === 'white') {
      setMode('balck');
      document.body.style.color= "white";
      document.body.style.backgroundColor = "#303132";
    } else {
      setMode('white');
      document.body.style.color= "black";
      document.body.style.backgroundColor = "#f8f9fa";
    }
  }

  return (
    <>
      <Navbar title="Jio" home="Home" about="About Us" mode={mode} tooggleMode={tooggleMode}/>
      <div className="container">
      <MyInputBox heading="Input text below:" />
      </div>
    </>
  );
}

export default App;
