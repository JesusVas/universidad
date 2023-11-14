import React from 'react';
import { Box } from '@mui/material';
import Layout from './Layout';
import Footer from './Footer';
import MainBanner from './MainBanner';
import Departments from './Departaments';

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
