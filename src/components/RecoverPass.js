import { Container,Typography,TextField,Button,Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
const RecoverPass=()=>{
  const navigate = useNavigate();

  
  const [password,setPassword]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[email,setEmail]=useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, vuelve a ingresarlas.");
      return;
    }
    const url="http://localhost/odontologia/CrearUsuario.php";
    let fData=new FormData();
    
    fData.append('password',password);
    fData.append('email',email);
    
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
        <Typography variant="h5">¿Olvidaste tu contraseña?</Typography>
        <Typography >Llena los campos de abajo para recuperarla.</Typography>
        <form onSubmit={handleSubmit}>
          
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
            disabled
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
            disabled
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Restaurar
          </Button>
        </form>
        <Link href="/login" variant="body2">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </div>
    </Container>
    )   
}
export default RecoverPass;