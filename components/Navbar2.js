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
