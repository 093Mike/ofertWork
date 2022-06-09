import Home from './views/home/home';
import LogIn from './views/logIn/logIn';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/logIn" element={<LogIn/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
