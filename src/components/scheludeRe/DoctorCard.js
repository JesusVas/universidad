import { Card,CardContent,Typography,CardMedia, Box,Modal } from "@mui/material";
import { useState } from "react";
import FormDate from "./FormDate";

const DoctorCard = ({ name, imageSrc}) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  }
  return (
    <Box>
      <Card onClick={handleClick}>
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
            <FormDate onClose={handleCloseForm} />
            </Box>
      </Modal>
    </Box>
  );
};

export default DoctorCard;