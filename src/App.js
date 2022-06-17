import Home from './views/home/home';
import LogIn from './views/logIn/logIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  useEffect, useState } from 'react';
import colors from './config/colors.json'
import Firebase from './config/firebase'
import './App.css';
import Profile from './views/profile/profile';
import Jobs from './views/jobs/jobs';

function App() {
  let f = new Firebase();
  
  const [user, setUser] = useState();
  const [dark, setDark] = useState(true);
  const [colores, setColores] = useState(colors.light);

  function PrivateRoute({path, element}) {
    const getUser = () => {
      f.firebaseAuth.getAuth().onAuthStateChanged(
        function (user) {
          if(user === null){ window.location.replace('/login')}
          else{setUser(user)}
        }
      )
    }

    useEffect(()=>{getUser()},[path])

    return(
      <>
        <div>{element}</div>
      </>
    );

  }

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
          <Route path="/jobs" element={<Jobs colores={colores} changeMode={changeMode}/>} />
          <Route path="/profile" element={<PrivateRoute  element={<Profile colores={colores} changeMode={changeMode} user={user} />}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
