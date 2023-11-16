import MainBanner from "./welcomeC/MainBanner";
import Layout from "./Layout";
import Departments from "./Departaments";
import Footer from "./Footer";
import { Box } from "@mui/material";
const Welcome=({ username })=>{
    return(
      <Box>
        <Layout/>
        <MainBanner username={username}/>
        <Departments/>
        <Footer/>
      </Box>
    )
};
export default Welcome;