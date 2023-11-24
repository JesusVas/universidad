import { TextField,Button,Container,Typography } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
const FormDate=({onClose,doctor,nombreUsuario,apellidos,setApellidos,setNombreUsuario})=>{
    
    
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [horaError, setHoraError] = useState(false);

    const validarHora = (hora) => {
      const horaMin = new Date(fecha);
      horaMin.setHours(8, 0, 0); 
      const horaMax = new Date(fecha);
      horaMax.setHours(20, 0, 0); 
  
      const horaSeleccionada = new Date(fecha);
      const [horaInput, minutosInput] = hora.split(':');
      
      if (parseInt(minutosInput, 10) !== 0) {
        return false; 
      }
  
      horaSeleccionada.setHours(parseInt(horaInput, 10), 0, 0);
  
      return horaSeleccionada >= horaMin && horaSeleccionada <= horaMax;
    };

    useEffect(() => {
      const today = new Date().toISOString().split('T')[0];
      setFecha(today);
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validarHora(hora)) {
        setHoraError(true);
        return;
      }

    const url="http://localhost/odontologia/CrearFichas.php";
    let fData=new FormData();
    fData.append('nombreUsuario',nombreUsuario);
    fData.append('apellidos',apellidos);
    fData.append('fecha',fecha);
    fData.append('doctor',doctor);
    fData.append('hora',hora);
    axios.post(url,fData).then(response=>{
      if(response.data==="¡Ficha Reservada!"){alert(response.data)}
      else if(response.data==="La hora con el doctor en la fecha seleccionada ya esta reservada.Intentelo de nuevo."){
        alert(response.data);
      }
      else if(response.data==="Error"){
        alert(response.data);
      }
    }).catch(error=>alert(error));
      
      onClose();
    };
  
    const handleCancel = () => {
      
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
            label="Doctor"
            name="doctor"
            value={doctor}
            
            disabled
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            label="Nombre"
            name="name"
            value={nombreUsuario}
            onChange={(e)=>setNombreUsuario(e.target.value)}
            disabled
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
            disabled
          />
          <TextField
              fullWidth
              id="date"
              label="Fecha"
              type="date"
              variant="outlined"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              disabled
            />
            <TextField
              fullWidth
              label="Hora"
              type="time"
              variant="outlined"
              
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              error={hora !== '' && !validarHora(hora)}
              helperText={hora !== '' && !validarHora(hora) && 'La hora debe estar entre 8 am y 8 pm, y ser en punto'}
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