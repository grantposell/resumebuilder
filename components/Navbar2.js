import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


export default function Navbar2() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{backgroundColor: '#152fa3'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="https://www.ravenresumes.com/">Raven Resumes<img src="https://raven-resumes.s3.amazonaws.com/Logo.png" alt="Girl in a jacket" width="50px" style={{verticalAlign: 'middle'}}></img></a>
                    </Typography>
                    <Button color="inherit" component="a"
                        href="/about">About</Button>
                    <Button color="inherit" component="a"
                        href="/booking">Book</Button>
                    <Button color="inherit" component="a"
                        href="/contact">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
