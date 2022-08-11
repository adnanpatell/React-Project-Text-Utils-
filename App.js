import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';

function App() {
  const [mode,setMode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
  <Navbar title="TextUtils Blog"  mode={mode} togglemode={togglemode} />
    <div className="container">
    <About />
      <TextForm  heading="Text Analyzer" mode={mode} />
    </div>
  </> 
    
  );
}

export default App;
