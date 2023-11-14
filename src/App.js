import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';
import Horario from './components/Horario';
import Welcome from './components/Welcome';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Register/>}></Route>
      {isLoggedIn ? (
        <>
        <Route path="/horario"  element={<Horario/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
        
        </>
        ) : (
        <>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register/>}></Route>
        </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
