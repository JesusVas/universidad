import { Card,CardContent,Typography,CardMedia, Box,Modal } from "@mui/material";
import { useState } from "react";
import FormDate from "./FormDate";

const DoctorCard = ({ name, imageSrc,nombreUsuario,apellidos,setNombreUsuario,setApellidos}) => {
  const [showForm, setShowForm] = useState(false);
  const [doctor,setDoctor]=useState("");

  const handleClick = (value) => {
    setShowForm(true);
    setDoctor(value);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  }
  return (
    <Box>
      <Card  onClick={() => handleClick(name)}>
        <CardMedia component="img" alt={name} image={imageSrc} sx={{ objectFit: 'cover',height: 200 }}/>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
       
      </Card>
      <Modal
        open={showForm}
        onClose={handleCloseForm}
        
        
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            }}>
            <FormDate doctor={doctor} onClose={handleCloseForm} nombreUsuario={nombreUsuario} apellidos={apellidos} setNombreUsuario={setNombreUsuario} setApellidos={setApellidos}/>
            </Box>
      </Modal>
    </Box>
  );
};

export default DoctorCard;