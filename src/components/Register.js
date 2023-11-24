import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name,setName]=useState("");
  const [username,setUsername]=useState("");
  const [apellidos,setApellidos]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[email,setEmail]=useState("");
  const [edad,setEdad]=useState(3);
  const handleSubmit=(e)=>{
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, vuelve a ingresarlas.");
      return;
    }
    const url="http://localhost/odontologia/CrearUsuario.php";
    let fData=new FormData();
    fData.append('name',name);
    fData.append('apellidos',apellidos);
    fData.append('username',username);
    fData.append('password',password);
    fData.append('email',email);
    fData.append('edad',edad);
    axios.post(url,fData).then(response=>{
      if(response.data==="Cuenta creada.Inicia sesion para continuar"){alert(response.data);navigate('/login')}
      else if(response.data==="El nickname ya existe o le correo esta vinculado a otra cuenta.La cuenta no ha sido creada."){
        alert(response.data);
      }
      else if(response.data==="Error la cuenta no ha sido crada."){
        alert(response.data);
      }
    }).catch(error=>alert(error));
  }
  return (
    <Container  maxWidth="xs">
      <div>
        <Typography variant="h5">Regístrate</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            label="Nombre"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            label="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={(e)=>setApellidos(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
            label="Usuario"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type='email'
            label="Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirma Contraseña"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="edad"
            label="Edad"
            type="number"
            inputProps={{ min: "3" }}
            value={edad}
            onChange={(e)=>setEdad(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Registrarse
          </Button>
        </form>
        <Link href="/login" variant="body2">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </div>
    </Container>
  );
}

export default Register;
