import * as React from 'react';
import Button from '../components/button';
// import '../styles/globals.css'
import ProductHeroLayout from './productherolayout';
import Image from 'next/image'
// import resumes from '../public/images/resumes.png'

// const resume = <Image
//       src={resumes}
//       alt="Picture of the author"
//       width="350px"
//       height="300px"
//     />
const backgroundImage =
  'https://raven-resumes.s3.amazonaws.com/resume.jpeg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'white', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <h2 color="inherit" align="center" marked="center">
        Need a new job and not sure where to start?
      </h2>
      <h5
        color="inherit"
        align="center"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Sign up for a free consultation and jump start your job search!
      </h5>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="https://app.squarespacescheduling.com/schedule.php?owner=26160574&appointmentType=33200216"
        sx={{ minWidth: 200, backgroundColor: '#1876d1',}}
      >
        Book Now
      </Button>
      </ProductHeroLayout>
  );
}