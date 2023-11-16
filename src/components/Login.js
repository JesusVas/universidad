import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';

function Login({ setIsLoggedIn,username,setUsername }) {
  console.log(username);
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url="http://localhost/odontologia/IniciarSesion.php";
    let fData=new FormData();
    fData.append('username',username);
    fData.append('password',password);
    axios.post(url,fData).then(response=>{
      if(response.data==="Inicio de sesion exitoso"){
      setIsLoggedIn(true);
      <Welcome username={username}/>
      alert(response.data);
      navigate('/welcome');
      
      }
      else if(response.data==="Contraseña incorrecta"){
        alert(response.data);
      }
      else if(response.data==="El usuario no existe"){
        alert(response.data);
      }
    }).catch(error=>alert(error));
  };

  return (
    <Container maxWidth="xs">
      <div>
        <div>{username}</div>
        <Typography variant="h5">Iniciar Sesión</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Iniciar Sesión
          </Button>
        </form>
        <Link href="/register" variant="body2">
          ¿No tienes una cuenta? Regístrate
        </Link>
      </div>
    </Container>
  );
}

export default Login;
