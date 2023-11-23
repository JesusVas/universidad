import { TextField,Button,Container,Typography } from "@mui/material";
import { useState } from "react";
const FormDate=({onClose})=>{
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[email,setEmail]=useState("");
    const [edad,setEdad]=useState(3);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      // Puedes usar las variables de estado (name, username, password, etc.) para obtener los valores
      // y realizar acciones como enviar una solicitud a tu servidor
      // ...
  
      // Después de manejar la lógica del formulario, cierra el formulario
      onClose();
    };
  
    const handleCancel = () => {
      // Si el usuario elige cancelar, simplemente cierra el formulario
      onClose();
    };
    return(
        <Container  maxWidth="xs">
      <div>
        <Typography variant="h5">Reservar Cita</Typography>
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
            
            variant="contained"
            color="primary"
            
          >
            Reservar
          </Button>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </form>
      </div>
    </Container>
    )
}
export default FormDate;