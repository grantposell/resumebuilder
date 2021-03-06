import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Abouthero from '../views/abouthero';

export default function About() {

    return (
        <div style={{ backgroundColor: "rgb(242,242,247)", height: '100vh' }}>
            <Head>
                <title>Raven Resumes - About</title>
                <script src="//code.tidio.co/q0ldmoeyadk3faqrqpoxei0orwdhk4n9.js" async></script>
                <meta property="og:title" content="Raven Resumes -
         About"></meta>
                <meta property="og:url" content="https://www.ravenresumes.com/about"></meta>
                <meta name="description" content="Raven Resumes is a service that is the applicant's advocate, someone that does the research for you and gives you the advice that you need to succeed in your job search. Raven Resumes gives you tools, tips, and advice on how to maneuver the tricky landscape that is job hunting. So check out our many services: resume editing, career mapping, interview principles, and application techniques."></meta>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <meta property="og:description" content="Raven Resumes is a service that is the applicant's advocate, someone that does the research for you and gives you the advice that you need to succeed in your job search. Raven Resumes gives you tools, tips, and advice on how to maneuver the tricky landscape that is job hunting. So check out our many services: resume editing, career mapping, interview principles, and application techniques."></meta>
                <meta property="og:locale" content="en_US"></meta>
                <meta property="fb:app_id" content="403653587865581" />
            </Head>
            <Navbar2 />
            <Abouthero/>
            <Footer />
        </div>
    )
}