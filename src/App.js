// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InputText from './components/InputText';
import Navbar from './components/Navbar';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert , setalert] = useState(null)

  const showAlert = (stutus, message) =>{
    setalert({
      stutus: stutus,
      msg: message
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }  

  const toggleMode = () =>{ 
     if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor= 'rgb(9 38 61)'
      showAlert("success", "Dark Mode Enable")
     } else {
      setmode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("success", "Light Mode Enable")
     }
  }
  return (
    <>
      <Navbar title="Text Manupulator"  toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <InputText heading="Manipulate Text As You Want" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
