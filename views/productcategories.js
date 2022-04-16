import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

// import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://raven-resumes.s3.amazonaws.com/architecture.avif',
    title: 'Architecture & Construction',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/manufacturing.avif',
    title: 'Manufacturing',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/science.avif',
    title: 'Science',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/engineering.avif',
    title: 'Engineering',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/technology.avif',
    title: 'Technology',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/mathematics.avif',
    title: 'Mathematics',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/transportation.avif',
    title: 'Transportation',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/logistics.avif',
    title: 'Distribution & Logistics',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/more.avif',
    title: 'More',
    width: '33.33%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <h2 variant="h4" marked="center" align="center" component="h2">
        Resume services for all industries!
      </h2>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <h3
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </h3>
              
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}