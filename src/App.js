import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';
import Horario from './components/Horario';
import Welcome from './components/Welcome';
import MembersInfo from './components/Members';
import { useState } from 'react';
import RecoverPass from './components/RecoverPass';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <Router>
      <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/welcome" /> : <Home />} />

        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/welcome" /> : <Login setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
          }
        />

        
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/welcome" /> : <Register />}
        />

        <Route
          path="/recover"
          element={isLoggedIn ? <Navigate to="/recover" /> : <RecoverPass />}
        />

        {isLoggedIn ? (
          <>
            <Route path="/horario" element={<Horario username={username} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/welcome" element={<Welcome username={username} />} />
            <Route path="/members" element={<MembersInfo />} />
          </>
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
