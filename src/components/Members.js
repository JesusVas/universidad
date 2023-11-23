import { Box } from "@mui/material";
import Layout from "./homeComponents/Layout";
import Info from "./membersComponents/Info";
import Footer from "./homeComponents/Footer";
const MembersInfo=()=>{
    return(
        <Box>
            <Layout/>
            <Info/>
            <Footer/>
        </Box>
    )
};

export default MembersInfo;