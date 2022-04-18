import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import Button from '../components/button';



const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'white',
  fontWeight: 'medium',
};

const image = {
  height: 200,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#1876d1', overflow: 'hidden', color: 'white' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <h2 variant="h4" marked="center" component="h2" sx={{ mb: 14}}>
          How it works
        </h2>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://raven-resumes.s3.amazonaws.com/services.png"
                  alt="suitcase"
                  loading="lazy"
                  sx={image}
                />
                <h5 variant="h5" align="left">
                  Review our services and choose the one that fits your needs.
                </h5>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://raven-resumes.s3.amazonaws.com/employee.png"
                  alt="graph"
                  loading="lazy"
                  sx={image}
                />
                <h5 variant="h5" align="left">
                  Next, select a time and day that works best for you to meet with one of our consultants.
                </h5>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://raven-resumes.s3.amazonaws.com/meeting.png"
                  loading="lazy"
                  alt="clock"
                  sx={image}
                />
                <h5 variant="h5" align="left">
                  Meet your consultant and realize all of the possibilities. They will walk you through resume edits, possible jobs, and interview preparation.
                </h5>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;