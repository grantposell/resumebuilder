import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Link from 'next/link';


export default function Footer() {
    return (
        <div>
            <footer style={{ color: "white", position: "fixed", bottom: 0, height: '50px', width: '100%', padding:'10px',backgroundColor: 'black', alignItems:'center', textAlign: 'center'}}>
            <a href="https://www.instagram.com/ravenresumes/"><InstagramIcon fontSize="large"/></a>
            <a href="https://www.facebook.com/ravenresumes"><FacebookIcon fontSize="large"/></a>
            </footer>
        </div>
    )
}