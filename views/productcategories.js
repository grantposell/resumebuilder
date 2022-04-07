import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
// import Typography from '../components/Typography';
import appCurvyLines from "../pages/images/appCurvyLines.png"

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://cvws.icloud-content.com/B/AdBYC-gYuuONBBfPJIs_LMxZs_rQAQJz5EQVESqRaKDFfJgEE0RpZ87e/architecture.jpeg?o=AkBoEngBIffQWbAnzd1W1x2dQX7AdDaxKFWoYV52ahIN&v=1&x=3&a=CAogYuNCe8jcJ7u_0EagGiE-iuHuAYP5bbDFYU_Lv_i6_BsSaxD11Zm5_y8Ylc3Quf8vIgEAUgRZs_rQWgRpZ87eaiXOPXL5nlqaUDG5-7Urf4txdZCH3GbX4aFi_uHAMYxyh4ThEgKpciW-4KVF8Os3qXqGJIGsMbkM61RHRyzwRJHJ_SQ0mUpPjv1GmNfV&e=1649119864&fl=&r=6f3e2b3a-2161-4ad1-be2e-e8ced21a0e0b-1&k=NbFtFU-kL2uFca-1NTzrwA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=NhMz6bOYM8Om80yv2hRaOYw7-m4&cd=i',
    title: 'Architecture & Construction',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/AUqsLGp64eeAOTNo4W_dcHJgr28EAYd3C_mAZGy46Eo7Q0vMcsKgfXZ9/manufacturing.jpeg?o=AnzBeO-_UXVpbL9o_eE0yn72zZqTvHVy1pFTF02nAhrG&v=1&x=3&a=CAogusixc-UpEg-Bd_OCK5phIf24Vys9gai9kkBdMjaAxEgSaxCJ-_-KgDAYqfK2i4AwIgEAUgRgr28EWgSgfXZ9aiUMGCwGX39hl5RUCLPT3T95YO613-dY8KOvgmqbT1GlV_bRFBb9ciWl_EmZnjLzLB7nhBzICUG_HTMJdtWleyt06bvvWRTuocRhZdjf&e=1649291409&fl=&r=12e92180-b3de-4427-ade0-5567690c7553-1&k=jW8___9pxNZW0hBThsrTzw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=AMGtlTai2UZkj7meVQ2YkckEFis&cd=i',
    title: 'Manufacturing',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/AWr8OBUS98Dk23p_3I-THD6BjvSbAQ9VAexzOBLoP_OekdhcBQZhrDnc/science.jpeg?o=ApoXYm6sTmO6q2gRspFwUlpVN0FByGSwv57jgOsG1f9W&v=1&x=3&a=CAog2IT0xafw8qhlBXnA5Yfb8KIryYCfUTJx_fNHQj8M-1ASaxCHr4GLgDAYp6a4i4AwIgEAUgSBjvSbWgRhrDncaiWUP9SQKpBp2wukPpP3NHCi3OJW7MSVa1ZmbucYYgufqJnELPQjciUxbDV8FH5ty-uq9VaNlqm-kpqlgLJHsn210VZugr8alk3uYp9P&e=1649291432&fl=&r=25b5fd1e-74a9-4d34-8b74-9129a1f98256-1&k=PPBD8954WilAj1ioQtBzag&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=MI14TBWOz4Om6rS0DKhAyrfZSMY&cd=i',
    title: 'Science',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/ARpjrZ60tuGUqc4dvcLDCbtXI87OASLdD8Z_NBCDe7aLSZab_yveqJET/engineering.jpeg?o=AvGO89sq52qGcnGS5wFw3rQrV6XhYLb0j1yfS1BDibi8&v=1&x=3&a=CAog5gkNKPpo6IE93gjkMO5okAHb9MLirwdzO3muzR6q9lQSaxCpk4mLgDAYyYrAi4AwIgEAUgRXI87OWgTeqJETaiW3qrq1a0NfEn504l7jLa4k4SUrNM1kBbVByaY2AoSrSbBp8fI0ciXeQVgtxaC-YEzqTc-T3stbSFGKbU9rUObKksZEwr8rdLskG2Tl&e=1649291560&fl=&r=0289ecdb-4a23-445a-bb6b-e70b43a57b70-1&k=ecqv21PHPaAnDz_yrrQ_4Q&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=Mlq4TwpjJPo5pNCbZBtH-NVweNQ&cd=i',
    title: 'Engineering',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/ATdDKEY5fAEmJwTsTX0DlQIDdmiRAZosQhAq3dfBtKzmbJ3tzbYgJ5nT/technology.jpeg?o=AmmTvJISlbjIQTwzUx1rGwKvAbAZCZEMMeivntMAeGp6&v=1&x=3&a=CAogil3jLiwZAuyxGhDAJYDPSO6dTuX1SjZxVbStZ2V-2QISaxCZxoqLgDAYub3Bi4AwIgEAUgQDdmiRWgQgJ5nTaiWU8hT0j2EQGe8mZCzcMtjk6kVhhm1JEV0PgqZRyfxpzh7z9zSdciUITfnq0UT1b7AMTyCrCVuXfyDctUoekWck1afM6IRDjmo5CMuY&e=1649291583&fl=&r=abe6ee85-077c-43e3-aa16-b6b9b08bfb22-1&k=1YnEa7fkPy7EXL0WsYCcbw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=c1drCiE8TacDpnCNlYbvT5ZI9BE&cd=i',
    title: 'Technology',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/AQYIsrDeesU4y8h3-DbJ4S5cdjj6ATx9fNrBpaaRDnVIW1sNieDUXGN2/mathematics.jpeg?o=Ag3iYbtVOJ5gBmq74Wmegjp5Pt0la9tEqg54NJmyEAzk&v=1&x=3&a=CAogBLrDHL6LUcNeq-yO508Jx07BD8mj4d6q2ptnLyh3uwkSaxDatZ-5_y8Y-qzWuf8vIgEAUgRcdjj6WgTUXGN2aiXNKdEoiJ7rFa-IgerIpMFCkJYJreYCGRg_Eci5ULHzwTXO--GSciV0yfiXXMGFFQ_dL5m84J0mdmUWH1lLXZn7DVqWnW2P4OyPuM8p&e=1649119958&fl=&r=e5419a75-4126-4ab8-b347-760bd659fe58-1&k=M0yUCSrKpBGZtjhVzSjT6A&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=i6qtcTppXoJjk42yFX9_D0P9QSg&cd=i',
    title: 'Mathematics',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/Aa0oTbxib5EimvfSJRMQ6tsXR13dAbLL0uTHQBZ1FV0oOJqJ2IfnKEeo/transportation.jpeg?o=Ar8e5n_WGhjtzhHnQCkh8xpU_oLH4Q1VvL7xaVStZ2r6&v=1&x=3&a=CAog-HHkA5qakPgWsli5qkpmesUWoOo1FR1se2uokaBlkXwSaxCl06K5_y8YxcrZuf8vIgEAUgQXR13dWgTnKEeoaiW4HMCHAR5nHbAgPZ8_hQJ48XsR0px-c8rgO5N117k2k1wLkBxVciWF6_8w2sGVqZz7STr1B7jWDqURQnpN7H9lQoXlcV9TdUEwSA_s&e=1649120011&fl=&r=f4df168b-3705-4950-8d3b-52885a5be05c-1&k=hYLbJS2N4FGfwKMVhuzpDw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=NlGv1brM1DpmV05_SidhueWy1Qs&cd=i',
    title: 'Transportation',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/AXoLRyIz1OgO39dVVmngCe0gtpSsAVCdp5rv8deFeLkKPmu1CrukvcVl/logistics.jpeg?o=AlcrY8FfUAH4OskNj9RPSC2WAKJJhttL1ROg2hvyK9GN&v=1&x=3&a=CAog3sFJFrb1mpeRXyUIsV7ZsmVQBhh14VY8G5sWJiYgrzsSaxCj2YuLgDAYw9DCi4AwIgEAUgQgtpSsWgSkvcVlaiXJyQPBZHQTArQ7Zp0wt27nfhCitaFww8jonsLuZB-OmYvxl34WciVywBmZb8b6vXzI-RSvpX6tl70nTo1Mgvlz_m3H7-dTCR4lY04A&e=1649291601&fl=&r=df7f90ed-4242-4194-81c2-54ba29d8480a-1&k=ObelG56_NenHPzic8rg3lA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=zJe3Ar0nymZxk0V7LrU117ws4Bg&cd=i',
    title: 'Distribution & Logistics',
    width: '33.33%',
  },
  {
    url: 'https://cvws.icloud-content.com/B/AVoYPYrUnMUOmRjlePj2FDjLPVoLAaRDsxHboVW2iDiywWRa0qjIeU2Q/more.jpeg?o=ApJWS1V0CytZhgxoh9aX1AZ-v748u3km9VhmwftiuCpv&v=1&x=3&a=CAogZVwTef5OvvsDXCBPu1zp-5CO9Qc99UZ50UxAAz8VYdgSaxCQy6S5_y8YsMLbuf8vIgEAUgTLPVoLWgTIeU2QaiVh1WaQXkEVUVH5qmUWEyIldO14Od80GMP3MyCr5mfxXVrcQmThciU2iMisks5csDfHPYxig0LwkoChx2brg7EYO52_SqzBDo7ttj6N&e=1649120043&fl=&r=b4d8f2fb-8e43-4ccf-8683-93660eda92d6-1&k=BVCGhrTX4cj2PmH96MyUxQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=cEe4Rb2_NsCaq2YEAxBUzDUC6cU&cd=i',
    title: 'More',
    width: '33.33%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <h2 variant="h4" marked="center" align="center" component="h2">
        Resume services for all industries!
      </h2>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <h3
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </h3>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}