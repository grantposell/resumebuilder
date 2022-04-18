import Head from 'next/head'
import Image from 'next/image'
import Navbar2 from '../components/Navbar2'
import ProductHero from '../views/producthero';
// import ProductValues from '../views/productvalues';
import ProductCategories from '../views/productcategories';
import ProductHowItWorks from '../views/producthowitworks';
import Pricing from '../views/pricing';
import Footer from '../components/Footer';
// import ProductCTA from '../views/productcta';
// import Pixel from '../components/Pixel'

export const config = {
  unstable_runtimeJS : false
}

export default function Home() {

  return (
    <div>
      <Head>
        <title>Raven Resumes</title>
        <script src="//code.tidio.co/q0ldmoeyadk3faqrqpoxei0orwdhk4n9.js" async></script>
        <meta charset="UTF-8"></meta>
        <meta property="og:url" content="https://www.ravenresumes.com/"></meta>
        <meta property="og:image" content="https://raven-resumes.s3.amazonaws.com/resume.avif"></meta>
        <meta name="description" content="We provide a holistic approach to getting a new job. Our services consist of resume editing, career coaching, and tailored job lists."></meta>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
        
        <meta property="og:site_name" content="Raven Resumes"></meta>
        <meta property="og:description" content="We provide a holistic approach to getting a new job. Our services consist of resume editing, career coaching, and tailored job lists."></meta>
        
        <meta property="fb:app_id" content="403653587865581" />
        {/* <meta name="twitter:site" content="@ravenresumes"></meta> */}
        <meta property="og:locale" content="en_US"></meta>
        

      </Head>
      {/* <Pixel name='FACEBOOK_PIXEL_1' /> */}
      <Navbar2 />
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      <ProductHowItWorks />
      <Pricing />
      <Footer/>
    </div>

  )
}
