import { Box, Grid, Typography, styled } from "@mui/material";
import DepartmentBox from "./DepartmentBox";
import r1 from "./cbba.png";
import r2 from "./tarija.png";
import r3 from "./lapaz.png";
import r4 from "./scz.png";

const StyledBox = styled(Box)(() => ({
  margin: 0,
  padding: 0,
  width: "100%",

}));

const Departments = () => {
  return (
    <StyledBox display="flex" justifyContent="center">
      <Box
        sx={{
          width: { xs: "100%", md: "75%" },
          height: "100%",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "100%", height: "100%" }}
        >
          <Box display="flex" flexDirection="column">
        
            <Box sx={{ padding: "1.5em 1.5em 0 1.5em" }}>
              <Typography
                variant="h1"
                style={{
                  fontFamily: "Barlow",
                  fontSize: 42,
                  color: "black",
                }}
              >
                Nuestras sucursales:
              </Typography>
              <Grid container rowSpacing={0} columnSpacing={4} pt={3}>
                <Grid item xs={12} md={3}>
                  <DepartmentBox
                    prefix="Cochabamba"
                    rightText="Telefono:XXX-XXX-XXXX"
                    rightText2="Direccion:XXX-XXX-XXX"
                    colorStr="white"
                    image={r1}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DepartmentBox
                    prefix="Tarija"
                    rightText="Telefono:XXX-XXX-XXXX"
                    rightText2="Direccion:XXX-XXX-XXX"
                    colorStr="white"
                    image={r2}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DepartmentBox
                    prefix="La Paz"
                    rightText="Telefono:XXX-XXX-XXXX"
                    rightText2="Direccion:XXX-XXX-XXX"
                    colorStr="white"
                    image={r3}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DepartmentBox
                    prefix="Santa Cruz"
                    rightText="Telefono:XXX-XXX-XXXX"
                    rightText2="Direccion:XXX-XXX-XXX"
                    colorStr="white"
                    image={r4}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Departments;
