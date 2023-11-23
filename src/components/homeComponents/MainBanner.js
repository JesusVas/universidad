import { Box, styled, Typography ,Button} from "@mui/material";
import diente from "../assets/diente.png";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)(() => ({
  margin: 0,
  padding: 0,
  width: "100%",
  backgroundColor: "#3B96C0",
}));

const StyledButton = styled(Button)(() => ({
  textTransform: "uppercase",
  fontFamily: '"Barlow Semi Condensed", sans-serif',
  fontSize: 20,
  borderRadius: "20px",
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  marginTop: "10px",
  marginRight:"100px",
  "&:hover": {
    border: "1px solid #808080",
    backgroundColor: "#FF0000",
    color: "white",
  },
  opacity: 1,
}));

const BoxT = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "inline-block",
    
  },
}));

const StyledImg = styled("img")(() => ({
  width:"140%",
  height: "100%",
  objectFit: "cover",
  marginLeft:"8px",
}));
const MainBanner = () => {
  return (
    <StyledBox display="flex" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "75%" }, height: "100%" }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ height: "100%", margin: 0, padding: 0 }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              padding: "1.5em 1.5em 1.5em 1.5em",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontFamily: "Barlow",
                fontSize: 42,
                color: "black",
              }}
            >
              Bienvenido para continuar registrate o inicia sesion
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Barlow",
                fontSize: 16,
                color: "black",
                my: "1.5em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in hendrerit orci. 
              Vestibulum ac accumsan velit. Nulla facilisi. Proin vel dui bibendum, tempus elit at, 
              viverra tortor. Curabitur suscipit, arcu eu facilisis congue, justo nisl tristique nulla,
               non elementum justo massa id quam. Suspendisse potenti.
            </Typography>
            <StyledButton variant="outlined" component={Link} to="/Login">Log in</StyledButton>
            <StyledButton variant="outlined" component={Link} to="/Register">Sign in</StyledButton>
          </Box>
          <BoxT  sx={{ width: { xs: "100%", md: "30%" } }}>
            <StyledImg src={diente} alt="img" />
          </BoxT>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default MainBanner;
