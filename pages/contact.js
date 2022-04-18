import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Contacthero from '../views/contacthero'

export default function Contact() {

    return (
        <div style={{ backgroundColor: "#A2AAAD", height: '100vh' }}>
            <Head>
                <title>Raven Resumes - About</title>
                <script src="//code.tidio.co/q0ldmoeyadk3faqrqpoxei0orwdhk4n9.js" async></script>
                <meta property="og:title" content="Raven Resumes -
         Contact"></meta>
                <meta property="og:url" content="https://www.ravenresumes.com/contact"></meta>
                <meta name="description" content="Raven Resumes can be contacted many ways."></meta>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <meta property="og:description" content="Raven Resumes can be contacted many ways."></meta>
                <meta property="og:locale" content="en_US"></meta>
            </Head>
            <Navbar2 />
            <Contacthero />
            <Footer />
        </div>
    )
}