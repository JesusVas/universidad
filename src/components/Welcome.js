import MainBanner from "./welcomeC/MainBanner";
import Layout from "./Layout";
import Departments from "./Departaments";
import Footer from "./Footer";
import { Box } from "@mui/material";
const Welcome=()=>{
    return(
      <Box>
        <Layout/>
        <MainBanner/>
        <Departments/>
        <Footer/>
      </Box>
    )
};
export default Welcome;