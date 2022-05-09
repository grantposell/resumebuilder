import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, orange, green } from '@mui/material/colors';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};
export default function Testimonials() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', bgcolor: 'rgb(242,242,247)', overflow: 'hidden', }}
        >
            <Container
                sx={{
                    mt: 8,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                <h2 style={{ textAlign: 'center', color: 'black', textDecoration: 'underline' }}>
                    Testimonials
                </h2>
                <br />
                <div style={{ display: 'flex', alignContent: 'center', }}>
                    <Grid container spacing={15}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, height:350 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                NR
                                            </Avatar>
                                        }
                                        title="Nick R."
                                        subheader="University Studies - Architecture"
                                    />
                                    {/* <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://raven-resumes.s3.amazonaws.com/NickRoman.png"
                                        alt="Paella dish"
                                    /> */}
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'left' }}>
                                            "Grant did a fantastic job at helping me look for an internship! Not only did he fine-tune my résumé by showing me how to organize and display my various skills, but he also taught me how to navigate the vast sea of job listings in order to find the best career opportunities."
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, height:350 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                                KD
                                            </Avatar>
                                        }
                                        title="Kyli D."
                                        subheader="Digital Nomad"
                                    />
                                    {/* <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://raven-resumes.s3.amazonaws.com/NickRoman.png"
                                        alt="Paella dish"
                                    /> */}
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'left' }}>
                                            "Grant with Raven Resumes has been extremely helpful with every step in the process of finding me a new job. Trying to make a career change can be overwhelming, but his knowledge and genuine care of his clients has helped me find the right position."
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>

                                <Card sx={{ minWidth: 300, height:350 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                                                BM
                                            </Avatar>
                                        }
                                        title="Ben M."
                                        subheader="Molecular Biology"
                                    />
                                    {/* <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://raven-resumes.s3.amazonaws.com/BenMooreresized.jpeg"
                                        alt="Paella dish"
                                    /> */}
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'left' }}>
                                            "Mr. Posell was a great help to my professional development. After only an hour of his time he was able to point out several ways my resume could shine to employers and gave me much needed career guidance. With his help I was able to capitalize on work experience and skills I would have normally overlooked. I highly recommend using his services if you are looking for some serious professional development."
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </div >
            </Container>
        </Box >
    );
}