import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const image = {
    // height: 200,
    width: 300,
    my: 4,
    float: "right",
    borderRadius: 5,
};
const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // borderRadius: 5,
    px: 5,
};

export default function Abouthero() {
    return (
        <div style={{ padding: '3rem', backgroundColor: "rgb(242,242,247)" }}>
            <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="https://raven-resumes.s3.amazonaws.com/aboutphoto+copy.png"
                            alt="suitcase"
                            loading="lazy"
                            sx={image}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2 variant="h4" marked="center" align="left" component="h2">
                        About
                    </h2>

                    <p style={{ textAlign: 'justify' }}>
                        Finding a job is challenging and changing career paths is even more difficult.

                        <br /><br />

                        This is where Raven Resumes was born. <br /><br />

                        Raven Resumes is here to help eliminate some of the pressure and stress that comes with searching for a new job and, subsequently, a new career. Raven Resumes is a service that is the applicant's advocate, someone that does the research for you and gives you the advice that you need to succeed in your job search. We provide you with the tools, tips, latest industry updates, and advice on maneuvering the tricky landscape that is job hunting. If you're tired of having the system work you and ready to take charge of your life, check out our many services: resume editing, career mapping, interview principles, and application techniques.
                        {/* Raven Resumes is a service that is the applicant's advocate, someone that does the research for you and gives you the advice that you need to succeed in your job search. Raven Resumes gives you tools, tips, and advice on how to maneuver the tricky landscape that is job hunting. So check out our many services: resume editing, career mapping, interview principles, and application techniques. */}
                    </p>
                </Grid>
                
            </Grid>
        </div>
    )
}