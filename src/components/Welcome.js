import MainBanner from "./welcomeC/MainBanner";
import Layout from "./homeComponents/Layout";
import Departments from "./homeComponents/Departaments";
import Footer from "./homeComponents/Footer";
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