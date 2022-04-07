import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';



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
                  src="https://cvws.icloud-content.com/B/ASEF4rmC-3BTaLRqxxaiGSg3MbmjAb-Rfbka6HdvHNZmTDJs3VgMwczw/services.png?o=AuzSlqV_8TtZXAY59oQX-m_ZK_tefqASSO6IOjGzlY_a&v=1&x=3&a=CAog_mBBhBFSGofN2gLRGFnz9NKoUWsQnzsHmwoDOoyA130SaxDD5q2X_y8Y493kl_8vIgEAUgQ3MbmjWgQMwczwaiXe6nEk3aAn-kfzF0sdg7TutCKQV5dJ1fVUalVb9rJAvqHSfKTNciWFyP_ztKEzZgIaFuomDo43Skms2QRlP2LRCAwZ7b47AOhnHBmh&e=1649048891&fl=&r=fb64f496-69c4-4d9d-b2b8-0d6eb032cf04-1&k=0o0D1SkCd2aBkWjh8cfnug&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=zQ1zeAv7t-Vc5dRZ3nVglPhxMPQ&cd=i"
                  alt="suitcase"
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
                  src="https://cvws.icloud-content.com/B/Aa--BqnzdwMSyoj5DbmqULt1Z_U0AZzztFPhg3SrYEPRJaIK5cbIpZnz/employee.png?o=Ap8STBvc62foAOT8Cky-9q8qqZA3_eP-eglK2LpnejUL&v=1&x=3&a=CAogsnKc4VQLprC9yCMhaq3F2rxA54xCmRf6-5kY1G1XJt0SaxC8i8GX_y8Y3IL4l_8vIgEAUgR1Z_U0WgTIpZnzaiUZo-BKQ5SX6S9vHz4FmBVv0hmbBm1W4H82K8H3HlYZNxz1Y0TMciUE8ClmOdp2xWbOweOGo0ap9tS3VqqXrlxPSCYraWyjIYMdmMs0&e=1649049207&fl=&r=571cf887-5d38-437e-8859-2a2ccae735a4-1&k=J0e8t3XgwM0yBYOXDWmUmg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=pYRglveVS4AXAP2YwDmrF_ojibY&cd=i"
                  alt="graph"
                  sx={image}
                />
                <h5 variant="h5" align="left">
                  Next, select a consultant based on what time and day best works for you.
                </h5>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://cvws.icloud-content.com/B/AWqDTmoJnfnsOLJO9_yI2ft4xyQGAccputc-dhoc14Q5oAuoTeZolkKW/meeting.png?o=AurbHDIEXD6UIP_sgyxL_6ZxTi9_Udf1VKC5QNskXnK5&v=1&x=3&a=CAoghuJWu-CuEJ00jIW_EjpAW5D7U_3xngvLaVDa0rvxbd4SaxDn1syX_y8Yh86DmP8vIgEAUgR4xyQGWgRolkKWaiUZytwonuoGLKE9wBXDBJbnfsc8NwyZVlxm2cc4-bj-UJLJ5xjlciVdIBPdPbvcmIa8plgWRRiBPy9tAGPqtBnuY-6PDY8LZT603Z6s&e=1649049396&fl=&r=7300ab11-d366-4020-9975-fcfb33349a79-1&k=0A6wblHARFnsoY-hdYydXg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=8amLwXRchK2YvoDMjDdoU_cvxIw&cd=i"
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