import React from 'react';
import { Box } from '@mui/material';
import Layout from './homeComponents/Layout';
import Footer from './homeComponents/Footer';
import MainBanner from './homeComponents/MainBanner';
import Departments from './homeComponents/Departaments';

function Home() {
  return (
    <Box>
      <Layout/>
      <MainBanner/>
      <Departments/>
      <Footer/>
    </Box>
  );
}

export default Home;
