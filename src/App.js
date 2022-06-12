import Home from './views/home/home';
import LogIn from './views/logIn/logIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import colors from './config/colors.json'
import './App.css';

function App() {
  const [dark, setDark] = useState(true);
  const [colores, setColores] = useState(colors.light);


  let changeMode = () => {
    console.log(dark);
    setDark(!dark);
    if(dark){setColores(colors.dark)}
    else{setColores(colors.light)}
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home colores={colores} changeMode={changeMode} />} />
          <Route path="/login" element={<LogIn colores={colores} changeMode={changeMode}/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
