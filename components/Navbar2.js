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
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            Raven Resumes
                        </Link>
                    </Typography>
                    {/* <Link href="/services">
                        <Button color="inherit">Services</Button>
                    </Link> */}
                    {/* <Link href="/pricing">
                        <Button color="inherit">Pricing</Button>
                    </Link> */}
                    <Link href="/booking">
                        <Button color="inherit">Book Now</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
