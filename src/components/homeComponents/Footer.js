import { Box, Typography, styled } from "@mui/material";
import marcaSwe from "../assets/gato.jpg";

const StyledImg = styled("img")(() => ({
  height: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "cover",
  width: 290,
}));

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", margin: "0 0 0 0", padding: 0 ,backgroundColor:"#D9D9D9"}}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: 0,
          padding: 0,
          width: "100%",
          maxHeight: "110px",
          height: "100px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            maxWidth: "100%",
            
            height: "100%",
            margin: 0,
            padding: 0,
            maxHeight: "110px",
            border: "1px solid black"
          }}
        >
          <StyledImg sx={{ border: "1px solid black"}} src={marcaSwe} alt="Imagen 1" />
          <Typography sx={{ border: "1px solid black",padding:"1.5em 0em 0em 0em" }}>Clinica Sonrisas Felices</Typography>
          <Box sx={{ border: "1px solid black",padding:"1.5em 1em 1.5em 4em" }}>
            <Typography>Urgencias las 24 horas</Typography>
            <Typography>Telf XXX-XXX-XXXX</Typography>
          </Box>
          <Box sx={{ border: "1px solid black",padding:"1.5em 1em 1.5em 1em" }}>
            <Typography>Tu salud es primero</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
