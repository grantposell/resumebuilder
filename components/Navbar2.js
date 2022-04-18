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
                    <Link href="/about">
                        <Button color="inherit">About</Button>
                    </Link>
                    <Link href="/booking">
                        <Button color="inherit">Book Now</Button>
                    </Link>
                    <Link href="/contact">
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
