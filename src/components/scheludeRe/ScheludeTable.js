import React, { useState,useEffect } from 'react';
import { Tooltip, IconButton, Avatar, Menu, MenuItem, Typography,Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DoctorCard from './DoctorCard';
import DoctorImg from '../assets/doctor.jpg';
import DoctoraImg from '../assets/doctora.png';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const doctors = [
  { id: 1, name: 'Dra. Julia' ,imageSrc: DoctoraImg },
  { id: 2, name: 'Dr. Pedro', imageSrc: DoctorImg },
  { id: 3, name: 'Dr. Javier',  imageSrc: DoctorImg },
  { id: 4, name: 'Dra. Mariana',  imageSrc: DoctoraImg},
  { id: 5, name: 'Dr. Fabian',  imageSrc: DoctorImg},
];



const ScheduleTable = ({ username, setIsLoggedIn }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const [item,setItem]=useState([]);
  const [nombreUsuario,setNombreUsuario]=useState("");
  const [apellidos,setApellidos]=useState("");
  

  useEffect(()=>{
    fetch("http://localhost/odontologia/DatosUsuario.php").then(res=>res.json())
    .then(
      (result)=>{
        setItem(result);
      }
    )
  },[]
  )
  
  useEffect(() => {
    if (item.length > 0) {
      for (let i = 0; i < item.length; i++) {
        const currentItem = item[i];
        if (currentItem.username === username) {
          setNombreUsuario(currentItem.name);
          setApellidos(currentItem.apellidos);
          break;
        }
      }
    }
  }, [item, username]);

  return (
    <div>
      {username}
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, backgroundColor: "#ff9d00" }}>
          <Avatar alt="Remy Sharp">{username.charAt(0)}</Avatar>
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
          <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={4} lg={3}>
            <DoctorCard name={doctor.name}  imageSrc={doctor.imageSrc} nombreUsuario={nombreUsuario} apellidos={apellidos} setNombreUsuario={setNombreUsuario} setApellidos={setApellidos}/>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
};

export default ScheduleTable;
