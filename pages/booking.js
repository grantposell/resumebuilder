import Head from 'next/head'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer';
import Script from "next/script";

export default function Booking() {

  return (
    <div style={{backgroundColor: "rgb(242,242,247)", height:'100vh'}}>
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
        <meta property="fb:app_id" content="403653587865581" />

      </Head>
      <Navbar2 />
      <iframe src="https://app.squarespacescheduling.com/schedule.php?owner=26160574" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
      <Footer/>
      <Script
        async
        src={`https://embed.acuityscheduling.com/js/embed.js`}
      />
      </div>
  )
}