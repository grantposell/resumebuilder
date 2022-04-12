import Head from 'next/head'
import Image from 'next/image'
import Navbar2 from '../components/Navbar2'
import ProductHero from '../views/producthero';
// import ProductValues from '../views/productvalues';
import ProductCategories from '../views/productcategories';
import ProductHowItWorks from '../views/producthowitworks';
import Pricing from '../views/pricing';
// import ProductCTA from '../views/productcta';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Raven Resumes</title>
        <script src="//code.tidio.co/q0ldmoeyadk3faqrqpoxei0orwdhk4n9.js" async></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0R7RS7CQ4"></script>
        
      </Head>
      <Navbar2 />
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      <ProductHowItWorks />
      <Pricing/>
    </div>
  )
}
