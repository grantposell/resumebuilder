import * as React from 'react';
import Button from '../components/button';
// import '../styles/globals.css'
import ProductHeroLayout from './productherolayout';
import Image from 'next/image'
// import resumes from '../public/images/resumes.png'

// const resume = <Image
//       src={resumes}
//       alt="Picture of the author"
//       width="350px"
//       height="300px"
//     />
const backgroundImage =
  'https://cvws.icloud-content.com/B/AYA_xbpdZa3yOrNwg2SapqsVwMyXAXzeiXPFwiRgaKd1ZhSrVWeirEeQ/resume.jpeg?o=AguQz7J_Ltqj_oCuyiPLI201hEs0T1vUifm1XmyBTOM1&v=1&x=3&a=CAogoMjO4KbwJA_NQH1oAyaRQvluQYEk8bgTFVtcBeZL9l4SaxDX2PiKgDAY98-vi4AwIgEAUgQVwMyXWgSirEeQaiUaAB53El-U1l7TKKNtYy_J6Zx2tLbe39M7j5ceXshHRBBMCLq6ciUySsOjMVTrg6oGu42LcrpZhXXuwo_2vyTigWKE54EbZq8ehZ-v&e=1649291290&fl=&r=d1e7ab00-a2e8-462b-9766-d10732c569c0-1&k=a_CEcZ0YjmL_jmBxzu0bDg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=bb3xTVflCD3ZFIoRMGKgZ2XP--Y&cd=i';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <h2 color="inherit" align="center" marked="center">
        Looking for Internships or your first job?
      </h2>
      <h5
        color="inherit"
        align="center"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy 50% off of the regular Resume price!
      </h5>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="/#pricing"
        sx={{ minWidth: 200, backgroundColor: '#1876d1',}}
      >
        Book Now
      </Button>
      </ProductHeroLayout>
  );
}