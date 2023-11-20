import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Box,styled} from '@mui/material';
import Logo from './logo.png';
import { FacebookRounded,Instagram, YouTube } from '@mui/icons-material';

const pages = ['Reportar un error','Quienes Somos'];

const StyledBox = styled(Box)(() => ({
  margin: 0,
  padding: 0,
  width: "100%",

}));
const StyledImg = styled("img")(() => ({
  height: "90px",
}));

const Layout=()=> {
  

  return (
    <StyledBox display="flex" justifyContent="center" sx={{backgroundColor:"#00ced1"}}>
      <Box sx={{ width: { xs: "100%", md: "75%" }, height: "100%" }}>
      <AppBar position="static" sx={{backgroundColor:" #00ced1",boxShadow: 'none' }}>
      
        <Toolbar disableGutters>
        <Box display="flex" justifyContent="center" >
        <StyledImg src={Logo} alt="right-img" />
      </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Barlow',
              fontWeight: '20px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Clinica Sonrisas Felices
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{ my: 2, color: 'white', display: 'block', flexGrow: 0.2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography sx={{
              mr: 2,
              
              flexGrow: 0.1,
              
              
              
            }}>Siguenos en :</Typography>
                <FacebookRounded
                  onClick={()=> window.open('https://www.facebook.com/UniversidadLoyolaDeBolivia/?locale=es_LA', '_blank')}
                  sx={{
                    color: "white",
                    "&:hover": { color: "red" },
                  }}
                />
                <Instagram
                  onClick={()=> window.open('https://www.instagram.com/universidadloyoladebolivia/?hl=es', '_blank')}
                  sx={{
                    color:"white",
                    "&:hover": { color: "red" },
                  }}
                />
                <YouTube
                  onClick={()=> window.open('https://www.youtube.com/@universidadloyoladebolivia1336', '_blank')}
                  sx={{
                    color: "white",
                    "&:hover": { color: "red" },
                  }}
                />
        </Toolbar>
      
    </AppBar>
      </Box>
    </StyledBox>
  );
}
export default Layout;