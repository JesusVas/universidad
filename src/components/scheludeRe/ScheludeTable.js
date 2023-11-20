import React, { useState } from 'react';
import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const ScheludeTable = ({username}) => {
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const horas = Array.from({ length: 13 }, (_, i) => 8 + i);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const [celdasColor, setCeldasColor] = useState({});

  
  const handleClick = (dia, hora) => {
    
    const nuevoEstado = { ...celdasColor };

    nuevoEstado[`${dia}-${hora}`] = nuevoEstado[`${dia}-${hora}`] === 'green' ? 'red' : 'green';

    setCeldasColor(nuevoEstado);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 0 }}>
          {username}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,backgroundColor:"#ff9d00"}}>
                <Avatar alt="Remy Sharp" >{username.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      <Typography>Horario</Typography>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell sx={{border:'1px solid black'}}>Día</TableCell>
            {horas.map((hora) => (
              <TableCell  sx={{border:'1px solid black'}} key={hora}>{hora}:00</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {diasSemana.map((dia) => (
            <TableRow key={dia}>
              <TableCell sx={{border:'1px solid black'}}>{dia}</TableCell>
              {horas.map((hora) => (
                <TableCell
                  key={`${dia}-${hora}`}
                  sx={{
                    backgroundColor: celdasColor[`${dia}-${hora}`] || 'gray',
                    color: 'white', 
                    cursor: 'pointer', 
                    border:'1px solid black'
                  }}
                  onClick={() => handleClick(dia, hora)}
                >
                  
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

export default ScheludeTable;
