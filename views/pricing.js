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
            sx={{ display: 'flex', bgcolor: 'rgb(242,242,247)', overflow: 'hidden', color: 'white' }}
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
                <h2 id='#pricing' variant="h4" marked="center" component="h2" style={{color: 'black'}}sx={{ mb: 14, }}>
                    Pricing
                </h2>
                <br />
                <div>
                    <Grid container spacing={15}>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, bgcolor: '#1876d0'}}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            Free Consultation - $0
                                        </Typography>
                                        <Typography variant="body2" color="white">
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
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, bgcolor: '#1876d0' }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            Tier 1 - $50
                                        </Typography>
                                        <Typography variant="body2" color="white">
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
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, bgcolor: '#1876d0' }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            Tier 2 - $75
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            <ul>
                                                <li>1 hour - 1v1 Advising & Resume Editing session</li>
                                                <li>4 Resume Alterations</li>
                                                <li>Career Path Recommendations based on Client preference</li>
                                                <li>Emailed Interview Questions tailored for applicant's interviews (Notify us of interview)</li>
                                                <li>Perfect for any professional.</li>
                                                <li>Completion: 4 days max</li>
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
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, bgcolor: '#1876d0' }}>
                                    {/* <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            Tier 3 - $100
                                        </Typography>
                                        <Typography variant="body2" color="white">
                                            <ul>
                                                <li>1 hour - 1v1 Advising & Resume Editing session</li>
                                                <li>3 Days Job Sourcing - Recommended Jobs List</li>
                                                <li>5 Resume Alterations</li>
                                                <li>Career Path Recommendations based on Client preference</li>
                                                <li>Follow up 1 hr. session for Interview Preparation (Notify us of interview)</li>
                                                <li>Review Interview Questions and Answers</li>
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
                    sx={{ mt: 8, backgroundColor: '#1876d0', color: 'white' }}
                >
                    Book Now
                </Button>
            </Container>
        </Box>
    );
}