import Carousel from 'react-material-ui-carousel';
import {CardMedia,Card,Paper,Typography,Button} from '@mui/material';
import styled from '@emotion/styled';
import image1 from "../assets/sample1.jpg";
import image2 from "../assets/sample2.jpg";
import image3 from "../assets/sample3.jpg";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MainBanner=({username})=>{
  const [item,setItem]=useState([]);
  const [nombre,setNombre]=useState("");
  const navigate = useNavigate();

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
            name: `¡Hola ${nombre}! Bienvenido a la Clínica Sonrisas Felices`,
            description: "Estamos encantados de tenerte con nosotros. En nuestra clínica, nos esforzamos por brindar el mejor cuidado dental para asegurarnos de que tu sonrisa siempre luzca radiante.",
            img: image1
        },
        {
            name: `${nombre} ¿Estás listo para cuidar de tu sonrisa?`,
            description: "Haz clic en el boton de abajo para reservar tu cita y dar el primer paso hacia una salud bucal óptima.",
            img: image2,
            link:"/horario"
        },
        {
          name: `${nombre}¿Deseas disfrutar de beneficios exclusivos?`,
          description: "Obtén tu tarjeta de membresía de la Clínica Sonrisas Felices hoy mismo. Con nuestra membresía, accederás a descuentos especiales, promociones y un cuidado dental personalizado. ¡Haz clic abajo para obtener informacion de como solicitar la tuya!",
          img: image3,
          link:"/members"
      },
    ]
    return(

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
              {item.link && (
                <Button variant="contained" color="primary" sx={{color:"#000000" ,'&:hover': {backgroundColor: "#FF0000",color:"white"}}} onClick={() => navigate(item.link)}>
                  Saber mas
                </Button>
              )}
          </StyledTextContainer>
        </StyledCardContainer>
      ))}
     
    </Carousel>
   
    )
};
export default MainBanner;