import { Box ,Typography,Button,Link,Container} from "@mui/material"
const Info=()=>{
    return(
        <Container maxWidth="sm">
            <Box    
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            >
                <Typography variant="h5">¡Descubre los Beneficios de Nuestra Membresía!</Typography>
                <Typography>
                    En Clínica Sonrisas Felices, ofrecemos una membresía exclusiva que brinda a nuestros pacientes beneficios especiales y un cuidado dental personalizado.
                </Typography>
                <Typography>
                    ¿Cómo puedes obtener tu membresía? ¡Es fácil!
                </Typography>
                <ul>
                    <li>
                        <Typography>
                            <strong>Consulta nuestros planes:</strong> Explora nuestros planes de membresía para encontrar el que mejor se adapte a tus necesidades y preferencias.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <strong>Visita nuestra clínica:</strong> Apersonarse a nuestra clínica y habla con nuestro personal. Estaremos encantados de guiarte a través de los detalles y responder cualquier pregunta que puedas tener sobre la membresía.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <strong>Decide y disfruta:</strong> Una vez que hayas seleccionado el plan de membresía adecuado, podrás comenzar a disfrutar de los beneficios exclusivos desde el primer día.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <strong>¡Después de 10 citas, solicita tu membresía!</strong> Como agradecimiento por confiar en nosotros, ofrecemos la oportunidad de solicitar la membresía después de completar 10 citas. Los beneficios incluyen descuentos especiales en tratamientos y servicios.
                        </Typography>
                    </li>
                </ul>
                <Typography>
                    ¡No esperes más para mejorar tu experiencia en nuestra clínica! Si tienes alguna pregunta, no dudes en contactarnos.
                </Typography>            
            </Box>
        </Container>
    )
}
export default Info;