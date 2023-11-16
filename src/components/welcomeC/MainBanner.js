import Carousel from 'react-material-ui-carousel';
import {Button, ListItem,ListItemText,Box,CardMedia,Grid,Card,Paper,Typography} from '@mui/material';
import styled from '@emotion/styled';
import gato from "../gato.jpg"
import axios from 'axios';
import { useEffect, useState } from 'react';

const MainBanner=({username})=>{
  const [item,setItem]=useState([]);
  const [nombre,setNombre]=useState("");
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
          setNombre(currentItem.name);
          break;
        }
      }
    }
  }, [item, username]);
  
  const StyledCardContainer = styled(Card)(() => ({
    // height: 400,
    height: '70vh',
    position: "relative",
  }));

  const StyledTextContainer = styled(Paper)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  }));

  const StyledCardMedia = styled(CardMedia)(() => ({
      backgroundColor: "black",
      height: "100%",
      overflow: "hidden",
      position: "relative",
      transition: "300ms",
      cursor: "pointer",
  }));
    let items = [
        {
            name: `Hola ${nombre}`,
            description: "Probably the most random thing you have ever seen!",
            img: gato
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: gato
        },
        {
          name: "Random Name #3",
          description: "Hello World!",
          img: gato
      },
    ]
    return(
    <div>
    <Carousel>
      {items.map((item, index) => (
        <StyledCardContainer key={index}>
        <StyledCardMedia
          component="img" 
          alt={item.name}
          height="100%"
          image={item.img}
        />
        <StyledTextContainer>
            <Typography variant="h5">{item.name}</Typography>
            <Typography>{item.description}</Typography>
          </StyledTextContainer>
        </StyledCardContainer>
      ))}
     
    </Carousel>
    
    </div>
    )
};
export default MainBanner;