import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
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
            sx={{ display: 'flex', bgcolor: '#1876d1', overflow: 'hidden', }}
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
                <h2 id='#pricing' variant="h4" marked="center" component="h2" style={{ color: 'white', textDecoration: 'underline'}} sx={{ mb: 14, }}>
                    Pricing
                </h2>
                <br />
                <div>
                    <Grid container spacing={15}>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300 }}>
                                    <CardContent style={{}}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Free Consultation - $0
                                        </Typography>
                                        <Typography variant="body2" >
                                            <ul>
                                                <li>Discuss structure of the service.</li><br />
                                                <li>Free 15 minute - 1v1 Advising session.</li><br />
                                                <li>Open Question & Answer.</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/schedule.php?owner=26160574&appointmentType=33200216">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, }}>
                                    <CardContent style={{}}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Starter - $50
                                        </Typography>
                                        <Typography variant="body2">
                                            <ul>
                                                <li>30 minute - 1v1 Advising & Resume Editing session.</li><br />
                                                <li>3 Resume Alterations.</li><br />
                                                <li>Career Path Recommendations based on Client preference.</li><br />
                                                <li>Perfect for Graduates or Individuals with little to no experience.</li><br />
                                                <li>Completion: 5 days max.</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/schedule.php?owner=26160574&appointmentType=33102060">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                    <hr />
                                    <CardContent>
                                        <Typography gutterBottom variant="h8" component="div" >
                                            Payment Plan Option: $25 / month over 2 months
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/catalog.php?owner=26160574&action=addCart&clear=1&id=1290200">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, }}>
                                    <CardContent style={{}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Professional - $75
                                        </Typography>
                                        <Typography variant="body2" >
                                            <ul>
                                                <li>1 hour - 1v1 Advising & Resume Editing session.</li><br />
                                                <li>4 Resume Alterations.</li><br />
                                                <li>Career Path Recommendations based on Client preference.</li><br />
                                                <li>Emailed Interview Questions tailored for applicant's interviews.</li><br />
                                                <li>Perfect for any professional.</li><br />
                                                <li>Completion: 4 days max.</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/schedule.php?owner=26160574&appointmentType=33199923">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                    <hr />
                                    <CardContent>
                                        <Typography gutterBottom variant="h8" component="div" >
                                            Payment Plan Option: $15 / month over 5 months
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/catalog.php?owner=26160574&action=addCart&clear=1&id=1290202">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Card sx={{ minWidth: 300, }}>
                                    <CardContent style={{}}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Master - $100
                                        </Typography>
                                        <Typography variant="body2" >
                                            <ul>
                                                <li>1 hour - 1v1 Advising & Resume Editing session.</li><br />
                                                <li>3 Days Job Sourcing - Recommended Jobs List.</li><br />
                                                <li>5 Resume Alterations.</li><br />
                                                <li>Career Path Recommendations based on Client preference.</li><br />
                                                <li>Follow up 1 hour session for Interview Preparation.</li><br />
                                                <li>Review Interview Questions and Answers.</li><br />
                                                <li>Perfect for Experienced Professionals.</li><br />
                                                <li>Completion: 3 days max.</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/schedule.php?owner=26160574&appointmentType=33199935">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                    <hr />
                                    <CardContent>
                                        <Typography gutterBottom variant="h8" component="div" >
                                            Payment Plan Option: $10 / month over 10 months
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'right' }}>
                                        <Button size="small" color="primary" href="https://app.squarespacescheduling.com/catalog.php?owner=26160574&action=addCart&clear=1&id=1290203">
                                            Book Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    );
}