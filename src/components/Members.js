import { Box } from "@mui/material";
import Layout from "./Layout";
import Info from "./membersComponents/Info";
import Footer from "./Footer";
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