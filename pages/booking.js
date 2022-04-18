import Head from 'next/head'
import Navbar2 from '../components/Navbar2'
import { InlineWidget } from "react-calendly";
import Footer from '../components/Footer';

export default function Booking() {

  return (
    <div style={{backgroundColor: "#A2AAAD", height:'100vh'}}>
      <Head>
        <title>Raven Resumes - Services and Booking Times</title>
        <script src="//code.tidio.co/q0ldmoeyadk3faqrqpoxei0orwdhk4n9.js" async></script>
        <meta property="og:title" content="Raven Resumes -
         Services and Booking Times"></meta>
        <meta property="og:url" content="https://www.ravenresumes.com/booking"></meta>
        <meta property="og:image" content="https://raven-resumes.s3.amazonaws.com/calendly.png"></meta>
        <meta name="description" content="Book a time with one of our consultants for resume editing, career coaching, and tailored jobs to your specification."></meta>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
        <meta property="og:description" content="Book a time with one of our consultants for resume editing, career coaching, and tailored jobs to your specification."></meta>
        <meta property="og:locale" content="en_US"></meta>
      </Head>
      <Navbar2 />
      <InlineWidget url="https://calendly.com/grantposell"/>
      <Footer/>
      </div>
  )
}