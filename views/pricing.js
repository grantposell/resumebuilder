import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};


export default function Pricing() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', bgcolor: '#A2AAAD', overflow: 'hidden', color: 'white' }}
        >
            <Container
                sx={{
                    mt: 8,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2 id='#pricing' variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
                    Pricing
                </h2>
                <br />
                <div>
                    <Grid container spacing={15}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300 }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Free Consultation - $0
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <ul>
                                                <li>Discuss structure of the service</li>
                                                <li>Free 30 minute - 1v1 Advising session</li>
                                                <li>Open Question & Answer</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300 }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Starter - $50
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <ul>
                                                <li>30 minute - 1v1 Advising & Resume Editing session</li>
                                                <li>3 Resume Alterations</li>
                                                <li>Career Path Recommendations based on Client preference</li>
                                                <li>Perfect for Graduates or Individuals with little to no experience.</li>
                                                <li>Completion: 5 days max</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300 }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Professional - $100
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <ul>
                                                <li>1 hour - 1v1 Advising & Resume Editing session</li>
                                                <li>3 Days Job Sourcing - Recommended Jobs List</li>
                                                <li>5 Resume Alterations</li>
                                                <li>Career Path Recommendations based on Client preference</li>
                                                <li>Perfect for Experienced Professionals.</li>
                                                <li>Completion: 3 days max</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    size="large"
                    variant="contained"
                    component="a"
                    href="/booking"
                    sx={{ mt: 8, backgroundColor: 'white', color: 'black' }}
                >
                    Book Now
                </Button>
            </Container>
        </Box>
    );
}