import Home from './views/home/home';
import LogIn from './views/logIn/logIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  useState } from 'react';
import colors from './config/colors.json'
import Firebase from './config/firebase'
import './App.css';

function App() {
  let f = new Firebase().firebase.default;
  const [user, setUser] = useState();
  const [dark, setDark] = useState(true);
  const [colores, setColores] = useState(colors.light);

  function PrivateRoute({path, view}) {
    /*const getUser = () => {
      f.auth().onAuthStateChanged(
        function (user) {
          if(user === null && path !== "/instructorLogin"){ window.location.replace('/instructorLogin')}
          else{setUser(user)}
        }
      )
    }*/

    //useEffect(()=>{getUser()},[path])

    return(
      <>
        <div>{view}</div>
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
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
