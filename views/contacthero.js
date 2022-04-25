import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const image = {
    // height: 200,
    width: 350,
    my: 4,
    float: "right",
};
const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
    height: 350,
};

export default function Contacthero() {
    return (
        <div style={{ padding: '3rem', backgroundColor: 'rgb(242,242,247)' }}>
                    <h2 variant="h4" marked="center" align="left" component="h2">
                        Contact Us
                    </h2>

                    <p style={{ textAlign: 'left' }}>
                        We love to chat about our products! Don't see something we have, let us know and we will do our best to accomodate.<br /><br />
                    </p>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                            <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://raven-resumes.s3.amazonaws.com/support.jpeg"
                                    alt="chat"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Chat
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'left' }}>
                                        The quickest way to get an answer to your question. Select the icon to the bottom right of your screen.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Start Chat</Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://raven-resumes.s3.amazonaws.com/emails.jpeg"
                                    alt="send us an email"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Email
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our support team is available by email to answer any questions you may have. <br/><br/>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href="mailto:contact@ravenresumes.com">
                                        <Button size="small">Compose Email</Button></a>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://raven-resumes.s3.amazonaws.com/phonecall.jpeg"
                                    alt="phone call"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Call
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Get the voice you need to hear over the phone with our support team.
                                    <br/><br/>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                        <Button size="small"><a href="tel:8325308222">Start Call</a></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
        </div>
    )
}