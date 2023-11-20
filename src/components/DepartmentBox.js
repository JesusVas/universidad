import { Box, Typography, styled ,Modal,Button} from "@mui/material";
import { useState } from "react";

const StyledBox = styled(Box)(() => ({
  margin: "1.5em 0 6em 0",
  flex: 1,
  // height: "100%",
  padding: "1.5em 1em 2em 1em",
  borderRadius: "8px",
  backgroundColor: "#3B96C0",
  transitionProperty: "all",
  transitionDuration: ".5s",
  transitionTimingFunction: "top ease",
  transitionDelay: "0",
  color: "white",
  border: "1px solid black"
 
}));



const StyledImg = styled("img")(() => ({
   height: "200px",
  // maxHeight: "100%",
  // maxWidth: "100%",
  // objectFit: 'cover',
  // width: 310,
  // [theme.breakpoints.up('xs')]:{
  //   width:110
  // },
  // [theme.breakpoints.up('sm')]:{
  //   width:210
  // },
  // [theme.breakpoints.up('md')]:{
  //   width:310
  // }
}));




const DepartmentBox=  ({
    prefix,
    rightText,
    colorStr,
    image,
    rightText2,
  })=> {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
    <StyledBox
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" justifyContent="center" >
        <StyledImg src={image} alt="right-img" />
      </Box>
      
      <Box>
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            fontSize: 18,
            textAlign: "center"
          }}
        >
          {prefix}
        </Typography>
        <Typography
          sx={{ fontFamily: "Ubuntu", fontSize: 14, color: `${colorStr}` }}
        >
          {rightText}
        </Typography>
        <Typography
          sx={{ fontFamily: "Ubuntu", fontSize: 14, color: `${colorStr}` }}
        >
          {rightText2}
        </Typography>
        <Button onClick={handleOpen} variant="contained" sx={{color:"#000000" ,backgroundColor:"#FFFFFF",marginTop:"7%",'&:hover': {backgroundColor: "#FF0000",color:"white"},}}>
            Abrir el mapa
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
              <iframe
            
                style={{ border: '0', width:"400px",
                height:"450px"}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.6629979578983!2d-68.12379939999999!3d-16.492660999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206af6123c63%3A0x8746519349fadd10!2sUniversidad%20Loyola!5e0!3m2!1ses-ES!2sbo!4v1608502840292!5m2!1ses-ES!2sbo"
                allowFullScreen
                title="Google Map"
              ></iframe>
          </Box>
        </Modal>
      </Box>
    </StyledBox>
  );
};

export default DepartmentBox;
