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
    url: 'https://raven-resumes.s3.amazonaws.com/architecture.jpeg',
    title: 'Architecture & Construction',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/manufacturing.jpeg',
    title: 'Manufacturing',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/science.jpeg',
    title: 'Science',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/engineering.jpeg',
    title: 'Engineering',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/technology.jpeg',
    title: 'Technology',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/mathematics.jpeg',
    title: 'Mathematics',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/transportation.jpeg',
    title: 'Transportation',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/logistics.jpeg',
    title: 'Distribution & Logistics',
    width: '33.33%',
  },
  {
    url: 'https://raven-resumes.s3.amazonaws.com/more.jpeg',
    title: 'More',
    width: '33.33%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <h2 id='#industries' variant="h4" marked="center" component="h2" align="center" style={{ color: 'black', textDecoration: 'underline'}} sx={{ mb: 14, }}>
                    Career Industries
                </h2>
      <h4 variant="h4" marked="center" align="center" component="h2">
      Our services include resume editing, career mapping, interview principles, and application techniques!
      </h4>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            loading="lazy"
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